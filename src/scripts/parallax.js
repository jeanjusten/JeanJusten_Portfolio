console.log("Parallax script inline loaded");

let listBg = document.querySelectorAll(".bg");
let titleBanner = document.querySelector(".motto");
let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            let top = window.scrollY;
            listBg.forEach((bg, index) => {
                if (index !== 0 && index !== 10) {
                    bg.style.transform = `translateY(${top * index / 2}px)`;
                } else if (index === 1) {
                    bg.style.transform = `translateY(${top / 3}px)`;
                }
            });
            titleBanner.style.transform = `translateY(${top * 3 / 2}px)`;
            ticking = false;
        });
        ticking = true;
    }
});
