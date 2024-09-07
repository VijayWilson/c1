(function() {

    const EMAILJS_PUBLIC_KEY = "pYYBar_ybSj9le0Ba";
    const EMAILJS_SERVICE_ID = "service_awgap3x";
    const EMAILJS_TEMPLATE_ID = "template_an4bnut";

    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY,
    });

    const sendEmail = async (templateParams) => {
        try {
            const response = emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            console.log(`email js response: ${response}`);
            return true;
        } catch(error) {
            console.log(`email js error: ${error}`);
            return false;
         }
    }

    // Expose sendEmail to the global scope
    window.sendEmail = sendEmail;

})();