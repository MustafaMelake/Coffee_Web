  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav-menu");
    const logo = document.querySelector(".nav-logo")
    const closeBtn = document.querySelector(".close-btn")

    menuIcon.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuIcon.classList.toggle("active")
      logo.classList.toggle("active");
    });

    closeBtn.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuIcon.classList.remove("active")
      logo.classList.remove("active");
      closeBtn.classList.remove("active")
    })
    
  });

// **************************************
  
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded",intializeSlide)

function intializeSlide() {
  slides[slideIndex].classList.add("display");
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach(slide => {
    slide.classList.remove("display")
  })
  slides[slideIndex].classList.add("display")
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// ****************************

document.querySelector(".form1").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default once

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (!email.includes("@") || name.length < 3 || message.length < 10) {
    alert('Please enter a valid name, email, and message (min 10 chars).');
    return; // stop further code
  }

  // If valid, continue with fetch
  const formData = { name, email, subject, message };

  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
  })
  .then(res => res.json())
  .then(data => {
    alert('Message sent successfully!');
    showThankYou();
  })
  .catch(err => {
    alert('Failed to send message.');
  });
});

function showThankYou() {
  const form = document.querySelector('.form1');
  form.innerHTML = '<h3>Thank you! Your message has been sent.</h3>';
}


