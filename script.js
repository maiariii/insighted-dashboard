function showSection(sectionId, btn) {

    const sections = document.querySelectorAll('.content-section');

    // 🔥 SET ACTIVE COLOR CONTEXT (THIS IS THE NEW PART)
    document.body.setAttribute("data-active", sectionId);

    // STEP 1: fade out current section
    sections.forEach(sec => {
        sec.style.opacity = "0";
        sec.style.transform = "translateY(10px)";
        sec.style.transition = "0.2s ease";
    });

    // STEP 2: wait before switching
    setTimeout(() => {

        // hide all
        sections.forEach(sec => {
            sec.classList.remove('active');
        });

        // show new section
        const target = document.getElementById(sectionId);
        target.classList.add('active');

        // force reflow for animation reset
        void target.offsetWidth;

        // STEP 3: fade in new section
        target.style.opacity = "1";
        target.style.transform = "translateY(0)";

    }, 180);

    // update nav buttons immediately
    document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.remove('active');
    });

    if (btn) btn.classList.add('active');
}


// ALWAYS GO HOME ON REFRESH
window.onload = function () {

    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
        sec.style.opacity = "0";
        sec.style.transform = "translateY(10px)";
    });

    const home = document.getElementById('home');
    home.classList.add('active');

    setTimeout(() => {
        home.style.opacity = "1";
        home.style.transform = "translateY(0)";
    }, 100);

    document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.remove('active');
    });
document.body.setAttribute("data-active", "home");
};
