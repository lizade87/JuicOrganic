function padNumber(num, length) {
    return num.toString().padStart(length, '0');
}

function animateCounters(cartonStart, cartonEnd, duration) {
    const cartonEl = document.getElementById("cartonCounter");
    const bottleEl = document.getElementById("bottleCounter");

    const steps = cartonEnd - cartonStart;
    const stepTime = Math.floor(duration / steps);

    let current = cartonStart;

    const timer = setInterval(() => {
        current++;
        const paddedCarton = padNumber(current, 5);
        const paddedBottles = padNumber(current * 9, 5);

        cartonEl.textContent = paddedCarton;
        bottleEl.textContent = paddedBottles;

        if (current >= cartonEnd) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Start animation after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
    animateCounters(0, 1234, 3000); // from 0 to 1234 in 3 seconds
});

    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});
