window.document$.subscribe(function () {
    console.log(">>> [DEBUG] Script Animasi Dimulai");

    // 1. Cek Motion Preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    console.log(">>> [DEBUG] User minta kurangi animasi (Reduce Motion)?", prefersReducedMotion);

    // KITA MATIKAN SEMENTARA PENGECEKAN MOTION UNTUK TES
    // if (prefersReducedMotion) { console.log("Script berhenti karena Reduce Motion"); return; }

    if (!("IntersectionObserver" in window)) {
        console.log(">>> [ERROR] Browser tidak support IntersectionObserver");
        return;
    }

    document.documentElement.classList.add("mm-animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(">>> [DEBUG] Elemen terlihat:", entry.target.tagName); // Cek elemen mana yang kena
                entry.target.classList.add("is-visible");
            }
        });
    });

    // 2. Cek apakah elemen ditemukan
    const elementsToAnimate = document.querySelectorAll(
        ".md-typeset h1, .md-typeset h2, .md-typeset h3, .md-typeset p, .md-typeset ul, .md-typeset ol, .md-typeset img"
    );

    console.log(">>> [DEBUG] Jumlah elemen ditemukan:", elementsToAnimate.length);

    if (elementsToAnimate.length === 0) {
        console.error(">>> [ERROR] Tidak ada elemen yang ditemukan! Cek selector CSS Anda.");
    }

    elementsToAnimate.forEach(el => {
        el.classList.remove("is-visible");
        observer.observe(el);
    });
});