(function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const counter = document.getElementById('counter');

    if (!slides.length || !prevBtn || !nextBtn || !counter) return;

    let current = 0;
    const lastIndex = slides.length - 1;

    function goTo(index) {
        if (index < 0 || index > lastIndex) return;
        current = index;
        render();
    }

    function render() {
        slides.forEach((slide, idx) => slide.classList.toggle('active', idx === current));
        counter.textContent = `${current + 1} / ${slides.length}`;
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === lastIndex;
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') goTo(current + 1);
        if (e.key === 'ArrowLeft') goTo(current - 1);
    });

    render();
})();