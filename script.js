(function() {
    'use strict';

    const eventDate = new Date('June 20, 2026 15:00:00').getTime();

    function updateCountdown() {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    function autoPlayMusic() {
        const music = document.getElementById('background-music');
        if (!music) return;

        const playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise.catch(function() {
                console.log('Reproducción automática bloqueada por el navegador');
            });
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    function createConfetti() {
        const container = document.getElementById('confetti-container');
        if (!container) return;
        
        const colors = ['#9B59B6', '#D7BDE2', '#AF7AC5', '#F5B041', '#F9E79F', '#E8DAEF'];
        const shapes = ['square', 'circle'];
        
        for (let i = 0; i < 30; i++) {
            setTimeout(function() {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = color;
                confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                
                if (shape === 'circle') {
                    confetti.style.borderRadius = '50%';
                }
                
                container.appendChild(confetti);
                
                setTimeout(function() {
                    confetti.remove();
                }, 6000);
            }, i * 100);
        }
    }

    function createFlowers() {
        const container = document.getElementById('flowers-container');
        if (!container) return;
        
        const flowers = ['🌸', '💮', '💐', '🌺', '🌷', '🪻', '🪻', '✿', '❀'];
        
        for (let i = 0; i < 12; i++) {
            setTimeout(function() {
                const flower = document.createElement('div');
                flower.className = 'flower';
                flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
                
                flower.style.left = Math.random() * 100 + '%';
                flower.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
                flower.style.animationDuration = (Math.random() * 15 + 20) + 's';
                flower.style.animationDelay = Math.random() * 5 + 's';
                
                container.appendChild(flower);
                
                setTimeout(function() {
                    flower.remove();
                }, 40000);
            }, i * 2000);
        }
    }

    function startAnimations() {
        createConfetti();
        createFlowers();
        setInterval(createFlowers, 40000);
    }

    function initScrollAnimations() {
        const sections = document.querySelectorAll('.section');
        if (sections.length === 0) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(function(section) {
            observer.observe(section);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            startAnimations();
            initScrollAnimations();
            autoPlayMusic();
        });
    } else {
        startAnimations();
        initScrollAnimations();
        autoPlayMusic();
    }
})();
