const hero = document.querySelector(".hero");

let blurAmount = 4;

// Mouse move parallax
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

// Reduce blur slightly on scroll (focus effect)
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    blurAmount = Math.max(2, 4 - scrollY / 400);

    hero.style.setProperty(
        "--blur",
        `${blurAmount}px`
    );
});
