document.addEventListener("DOMContentLoaded", function () {
    // Portfolio Section Particles
    particlesJS("particles-js", {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" }, // White particles
            shape: { type: "circle" },
            opacity: { value: 0.6, random: false },
            size: { value: 5, random: true },
            move: { enable: true, speed: 1.5, direction: "top", out_mode: "out" }
        },
        interactivity: { events: { onhover: { enable: false } } } // Disable interactivity
    });
});
document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-contact", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" }, // White particles
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: "up" } // Moves upward
        },
        interactivity: { events: { onhover: { enable: false } } } // No hover effects
    });
});

