(function() {

    const showToast = (message, type) => {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast align-items-center bg-${type} border-0`;
        toast.role = 'alert';
        toast.ariaLive = 'assertive';
        toast.ariaAtomic = 'true';
        toast.innerHTML = `
            <div class="d-flex">
                <div class="toast-body text-light">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `;
        toastContainer.appendChild(toast);

        const bootstrapToast = new bootstrap.Toast(toast);
        bootstrapToast.show();

        // Automatically remove the toast after it hides
        toast.addEventListener('hidden.bs.toast', () => {
            toast.remove();
        });
    };

     // Expose showToast to the global scope
     window.showToast = showToast;

})();
