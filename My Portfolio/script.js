// Typing Animation for "I'm a ..."
const roles = ["Web Developer", "UI Designer"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenRoles = 2000;
const textSpan = document.querySelector(".text-animation span");

function type() {
    if (charIndex < roles[roleIndex].length) {
        textSpan.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenRoles);
    }
}

function erase() {
    if (charIndex > 0) {
        textSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, deletingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length; 
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type(); 
});

function toggleContent(event) {
    event.preventDefault();  
    var moreContent = document.getElementById("moreContent");
    var btn = document.getElementById("readMoreBtn");

    // Toggle the visibility of the extra content
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";  
        btn.innerHTML = "Read Less"; 
    } else {
        moreContent.style.display = "none"; 
        btn.innerHTML = "Read More"; 
    }
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); 
            });

            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');

        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
}






