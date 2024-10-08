(function($) {

    $('#contactForm').on('submit', async function(event) {

        event.preventDefault();
        event.stopPropagation();

        const recaptchaResponse = grecaptcha.getResponse();
         
        const form = event.target;
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
        } else if (recaptchaResponse.length === 0) {
            showToast('Please complete the reCAPTCHA.', 'danger');
        } else {

            showLoader(true);

            const formData = buildFormData();
            const isEmailSent = await sendEmail(formData);
            if(isEmailSent) {
                showToast('Email sent successfully', 'success');
                form.reset();
                form.classList.remove('was-validated');
                grecaptcha.reset();
            } else {
                showToast('Failed to send email. Please try again later.', 'danger');
                console.log(formData);
            }

            showLoader(false);
        }
    });

    const buildFormData = () => {
        return {
            fullName: getElementValueById('fullName'),
            phone: getElementValueById('phone'),
            from: getElementValueById('email'),
            subject: getElementValueById('subject'),
            message: getElementValueById('message')
        }
    };

    const getElementValueById = (id) => sanitizeData(document.getElementById(id).value);

    const showLoader = (show) => {
        $("#submitButton").prop('disabled', show);
        if(show){
            $("#submitButtonText").addClass('d-none');
            $("#submitButtonLoader").removeClass('d-none');
        } else {
            $("#submitButtonText").removeClass('d-none');
            $("#submitButtonLoader").addClass('d-none');
        }
    }

})(jQuery);
