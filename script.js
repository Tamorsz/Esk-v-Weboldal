// Megvárjuk, amíg a DOM betöltődik
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

    // Minden menüpontra kattintáskor bezárjuk az összevont menüt (mobilnál hasznos)
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) {
                bsCollapse.toggle();
            }
        });
    });

    console.log("A Saci&Tomi oldal scriptje sikeresen betöltve!");
});