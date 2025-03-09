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
