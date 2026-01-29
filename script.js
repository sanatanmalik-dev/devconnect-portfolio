const texts = [
  "Building modern websites with passion 💻",
  "Frontend Developer 💻",
  "IT Support Engineer 🛠️",
  "Networking Enthusiast 🌐"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 1500);
    }
  } else {
    typingElement.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

    setTimeout(typeEffect, isDeleting ? 50 : 90);
}

typeEffect();



window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const underline = document.querySelector(".nav-underline");
const nav = document.querySelector("nav");


window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  const pageHeight = document.body.scrollHeight - window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    // 👇 LAST SECTION FIX
    const isLastSection = sectionId === "connect";

    if (
      (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) ||
      (isLastSection && scrollY >= pageHeight - 10)
    ) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});


// 🔽 UNDERLINE MOVE FUNCTION (ADD HERE)
function moveUnderline(link) {
  const linkRect = link.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();

  underline.style.width = `${linkRect.width}px`;
  underline.style.left = `${linkRect.left - navRect.left}px`;
}




const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});



window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});


// 🔵 Scroll Progress Bar Logic
const progress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const progress = document.getElementById("scroll-progress");
  const scrollTop = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  progress.style.width = (scrollTop / height) * 100 + "%";
});



// 🔁 Reset progress on refresh
window.addEventListener("load", () => {
  progress.style.width = "0%";
});


document.getElementById("mindsetBtn").onclick = () => {
  document.getElementById("mindsetText").textContent =
    "Understand → Break Down → Fix → Improve → Document";
};

document.body.classList.toggle("recruiter");



const mindsetBtn = document.getElementById("mindsetBtn");
const mindsetText = document.getElementById("mindsetText");

const mindsetSteps = [
  "I first understand the problem clearly 🤔",
  "Then I break it into smaller steps 🧩",
  "I Google + experiment patiently 🔍",
  "I test, fix & improve till it works 🚀"
];

let mIndex = 0;

mindsetBtn.addEventListener("click", () => {
  mindsetText.textContent = mindsetSteps[mIndex];
  mIndex = (mIndex + 1) % mindsetSteps.length;
});


// Contact form submit (dummy simulation)
const form = document.getElementById("contactForm");
const response = document.querySelector(".form-response");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  response.textContent = "Thanks for reaching out! I'll get back to you soon. ✅";
  form.reset();
});

// 📱 Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinksBox = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinksBox.classList.toggle("show");
});

