document.addEventListener("DOMContentLoaded", function () {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let toastTimeoutId;

    function showToast(message) {
        let toast = document.getElementById("mm-toast");
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "mm-toast";
            toast.className = "mm-toast";
            toast.setAttribute("role", "status");
            toast.setAttribute("aria-live", "polite");
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.add("is-visible");

        if (toastTimeoutId) {
            window.clearTimeout(toastTimeoutId);
        }

        const hideDelay = prefersReducedMotion ? 1200 : 1600;
        toastTimeoutId = window.setTimeout(() => {
            toast.classList.remove("is-visible");
        }, hideDelay);
    }
    if (!prefersReducedMotion && ("IntersectionObserver" in window)) {
        document.documentElement.classList.add("mm-animate");

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        const elementsToAnimate = document.querySelectorAll(
            ".md-typeset h1, .md-typeset h2, .md-typeset h3, .md-typeset p, .md-typeset ul, .md-typeset ol, .md-typeset table, .md-typeset .admonition, .md-typeset img"
        );

        elementsToAnimate.forEach(el => {
            observer.observe(el);
        });
    }

    document.addEventListener("click", function (event) {
        const copyButton = event.target.closest(
            ".md-code__button[data-md-type='copy'], .md-clipboard"
        );

        if (!copyButton) {
            return;
        }

        window.setTimeout(() => {
            showToast("Copied to clipboard");
        }, 0);
    });
});
