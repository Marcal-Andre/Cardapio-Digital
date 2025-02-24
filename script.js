<script>
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlide = document.querySelector('.carousel-slide');
const cards = document.querySelectorAll('.carousel-slide .card');
let currentIndex = 0;

function showNextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
}

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    carouselSlide.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

setInterval(showNextCard, 3000); // Change card every 3 seconds

// Infinite loop
carouselSlide.addEventListener('transitionend', () => {
    if (currentIndex === cards.length) {
        carouselSlide.style.transition = 'none';
        currentIndex = 0;
        carouselSlide.style.transform = `translateX(0)`;
        setTimeout(() => {
            carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        }, 0);
    }
});
</script>