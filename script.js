window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Initialize Typed.js for typing animation
const options = {
    strings: ["I am an engineering student", " An Aspiring software developer", " Backend developer", "Frontend developer", "Full stack developer", "MERN developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
};

const typed = new Typed(".typing-animation", options);

// Smooth scrolling for "Read More" and "Contact Me" buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to toggle the sidebar
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('hide');
    document.querySelector('.hamburger').classList.toggle('active');
}
