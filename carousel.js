


// Initialize and run every 5 seconds
document.addEventListener('DOMContentLoaded', () => {
    setInterval(rotateTheme, 5000);
});

function slideBlogs(direction) {
    const container = document.getElementById('blogGrid');
    // Calculate scroll distance (Card width + Gap)
    const card = document.querySelector('.blog-card');
    const cardWidth = card.offsetWidth + 30; // 30 is the gap in CSS

    if (direction === 'left') {
        container.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    }
}

function moveServices(direction) {
    const grid = document.getElementById('servicesGrid');
    const firstCard = grid.querySelector('.service-card');
    const moveDistance = firstCard.offsetWidth + 30; // Card + Gap

    if (direction === 'left') {
        grid.scrollBy({ left: -moveDistance, behavior: 'smooth' });
    } else {
        grid.scrollBy({ left: moveDistance, behavior: 'smooth' });
    }
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    document.getElementById("scrollBar").style.width = scrolled + "%";
}

