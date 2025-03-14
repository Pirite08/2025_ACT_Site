let scrollSpeed = 0;
let isScrolling;

window.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollSpeed += e.deltaY * 0.1; // 속도 조절
    if (!isScrolling) smoothScroll();
}, { passive: false });

function smoothScroll() {
    isScrolling = true;
    let scrollInterval = setInterval(() => {
        window.scrollBy(0, scrollSpeed);
        scrollSpeed *= 0.9; // 점점 속도를 줄이기 (관성 효과)
        if (Math.abs(scrollSpeed) < 0.5) {
            clearInterval(scrollInterval);
            isScrolling = false;
        }
    }, 16);
}

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".history-nav ul li");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            root: null, // 뷰포트 기준
            threshold: 0.2 // 요소가 20% 보이면 실행
        }
    );

    items.forEach((item) => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".act-2023");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.classList.add("show");
                }
            });
        },
        {
            root: null, // 뷰포트 기준
            threshold: 0.3 // 30% 이상 보이면 실행
        }
    );

    observer.observe(target);
});