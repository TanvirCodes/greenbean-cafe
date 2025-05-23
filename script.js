// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect when elements enter viewport
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1
}

const appearOnScroll = new IntersectionObserver (function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting)
            return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

