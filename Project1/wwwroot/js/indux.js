// Function to handle form submission
document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById('feedback-name').value;
    var email = document.getElementById('feedback-email').value;
    var rating = document.getElementById('feedback-rating').value;
    var comment = document.getElementById('feedback-comment').value;

    // Simulate form submission (replace with actual submission logic)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Rating:', rating);
    console.log('Comment:', comment);

    // Display feedback message
    var feedbackMessage = document.createElement('p');
    feedbackMessage.textContent = 'Thank you for your feedback!';
    feedbackMessage.style.color = 'green'; // Feedback message color
    var form = document.getElementById('feedback-form');
    form.parentNode.insertBefore(feedbackMessage, form.nextSibling);

    // Reset form fields
    document.getElementById('feedback-form').reset();
});

// Product slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto slide
setInterval(nextSlide, 3000);

// Optional: Add additional JavaScript functionality as needed for other elements on the page

// Smooth scroll functionality for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Highlight the active section in the navigation bar when scrolling
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('main > section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
