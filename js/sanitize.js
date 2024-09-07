(function() {

    const sanitizeData = (str) => DOMPurify.sanitize(str, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });

    // Expose sanitizeData to the global scope
    window.sanitizeData = sanitizeData;

})();