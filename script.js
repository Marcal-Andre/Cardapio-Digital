
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

const cartIcon = document.getElementById('cart-icon');
        const cart = document.getElementById('cart');
        const cartItems = document.getElementById('cart-items');
        const finalizePurchase = document.getElementById('finalize-purchase');
        let items = [];

        cartIcon.addEventListener('click', () => {
            cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
        });

        document.querySelectorAll('.card button').forEach((button, index) => {
            button.addEventListener('click', () => {
                const card = button.parentElement;
                const item = {
                    name: card.querySelector('h2').innerText,
                    description: card.querySelector('p').innerText,
                    img: card.querySelector('img').src
                };
                items.push(item);
                updateCart();
            });
        });

        function updateCart() {
            cartItems.innerHTML = '';
            items.forEach((item, index) => {
                const li = document.createElement('li');
                li.style.display = 'flex';
                li.style.justifyContent = 'space-between';
                li.style.alignItems = 'center';
                li.style.marginBottom = '10px';
                li.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px; border-radius: 5px;">
                    <div>
                        <h3 style="margin: 0;">${item.name}</h3>
                        <p style="margin: 0;">${item.description}</p>
                    </div>
                    <button onclick="removeItem(${index})" style="background-color: #ff3333; color: white; border: none; padding: 5px; border-radius: 5px; cursor: pointer;">Excluir</button>
                `;
                cartItems.appendChild(li);
            });
        }

        function removeItem(index) {
            items.splice(index, 1);
            updateCart();
        }

        finalizePurchase.addEventListener('click', () => {
            window.location.href = 'cadastro.html';
        });
    </script>
    <script>
        document.querySelectorAll('.card img').forEach((img, index) => {
            img.addEventListener('click', () => {
                const card = img.parentElement;
                const description = card.querySelector('p');
                const button = card.querySelector('button');
                description.style.display = description.style.display === 'none' ? 'block' : 'none';
                button.style.display = button.style.display === 'none' ? 'block' : 'none';
            });
        });

        document.querySelectorAll('.card p, .card button').forEach(element => {
            element.style.display = 'none';
        });

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

        setInterval(showNextCard, 3000); // Change card every 3 seconds;
