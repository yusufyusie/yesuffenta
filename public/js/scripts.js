/*!
* Start Bootstrap - undefined v7.0.7 (undefined)
* Copyright 2013-2024 Yesuf Fenta
* Licensed under ISC (https://github.com/yusufyusie/yesuffenta/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Movable dots animation
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    // Set the canvas dimensions to match the viewport's dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Set the canvas to be fixed and cover the entire viewport
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;

    let particlesArray;

    // Array of colors
    const colors = ['green', 'darkpink', 'darkred', 'darkblue',  'purple'];

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)]; 
        }
        // Draw particle
        draw() {
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        // Update particle position
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
    
            // Reset particle position if it moves off the canvas
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
        }
    }

    // Initialize particles
    function init() {
        particlesArray = [];
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            particlesArray.push(new Particle(x, y));
        }
    }

    // Animate particles
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }

    init();
    animateParticles();

});
