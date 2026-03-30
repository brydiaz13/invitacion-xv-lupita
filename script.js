(function() {
    'use strict';

    const eventDate = new Date('June 20, 2026 15:00:00').getTime();
    let mouseX = 0;
    let mouseY = 0;

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

    function trackMouseMovement() {
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        document.addEventListener('touchmove', function(e) {
            if (e.touches.length > 0) {
                mouseX = e.touches[0].clientX;
                mouseY = e.touches[0].clientY;
            }
        });
    }

    function moveFlowersTowardsMouse() {
        const flowers = document.querySelectorAll('.flower');
        flowers.forEach(function(flower) {
            const rect = flower.getBoundingClientRect();
            const flowerCenterX = rect.left + rect.width / 2;
            const flowerCenterY = rect.top + rect.height / 2;
            
            const dx = mouseX - flowerCenterX;
            const dy = mouseY - flowerCenterY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Flores se alejan del cursor (efecto repulsivo)
            if (distance < 150) {
                const angle = Math.atan2(dy, dx);
                const force = (150 - distance) / 150;
                flower.style.transform = 'translate(' + Math.cos(angle + Math.PI) * force * 40 + 'px, ' + Math.sin(angle + Math.PI) * force * 40 + 'px)';
            } else {
                flower.style.transform = 'translate(0, 0)';
            }
        });
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
                confetti.style.animationDuration = (Math.random() * 5 + 8) + 's';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                
                if (shape === 'circle') {
                    confetti.style.borderRadius = '50%';
                }
                
                container.appendChild(confetti);
                
                setTimeout(function() {
                    confetti.remove();
                }, 15000);
            }, i * 100);
        }
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
        
        for (let i = 0; i < 30; i++) {
            setTimeout(function() {
                const flower = document.createElement('div');
                flower.className = 'flower';
                flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
                
                flower.style.left = Math.random() * 100 + '%';
                flower.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
                flower.style.animationDuration = (Math.random() * 40 + 100) + 's';
                flower.style.animationDelay = Math.random() * 15 + 's';
                
                container.appendChild(flower);
                
                setTimeout(function() {
                    flower.remove();
                }, 160000);
            }, i * 5000);
        }
    }

    function startAnimations() {
        createConfetti();
        createFlowers();
        setInterval(createFlowers, 160000);
        trackMouseMovement();
        setInterval(moveFlowersTowardsMouse, 50);
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
