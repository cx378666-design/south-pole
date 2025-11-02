// ❄️ ANTARCTICA WEBSITE PRO JAVASCRIPT
// ------------------------------------
// Yeh script 3 main kaam karta hai:
// 1️⃣ Snowfall animation background
// 2️⃣ Responsive hamburger menu toggle
// 3️⃣ Scroll animations (fade, slide, zoom)

// 🌨️ SNOW ANIMATION -----------------
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
let snowflakes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createSnowflakes() {
  snowflakes = [];
  for (let i = 0; i < 120; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 1 + 0.5,
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.beginPath();
  snowflakes.forEach((flake) => {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
  });
  ctx.fill();
  moveSnowflakes();
}

let angle = 0;
function moveSnowflakes() {
  angle += 0.01;
  snowflakes.forEach((flake) => {
    flake.y += Math.pow(flake.d, 2) + 1;
    flake.x += Math.sin(angle) * 1.5;

    // Reset flake if it goes out of screen
    if (flake.y > canvas.height) {
      flake.y = 0;
      flake.x = Math.random() * canvas.width;
    }
  });
}

function updateSnowfall() {
  drawSnowflakes();
  requestAnimationFrame(updateSnowfall);
}

createSnowflakes();
updateSnowfall();

// 🍔 RESPONSIVE NAVBAR MENU -----------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("toggle");
});

// Close menu when any link is clicked (on mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
      hamburger.classList.remove("toggle");
    }
  });
});

// ✨ SCROLL REVEAL ANIMATION -----------------
const revealElements = document.querySelectorAll(".fade-in, .slide-up, .zoom-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.animationPlayState = "paused";
  observer.observe(el);
});

// 🧊 SMOOTH SCROLL EFFECT FOR INTERNAL LINKS -------------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// 🌟 OPTIONAL: NAVBAR BACKGROUND CHANGE ON SCROLL --------
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 80) {
    header.style.background = "rgba(0, 30, 60, 0.9)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
  } else {
    header.style.background = "rgba(0, 20, 40, 0.6)";
    header.style.boxShadow = "none";
  }
});





