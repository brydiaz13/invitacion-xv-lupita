(function() {
    'use strict';

    const eventDate = new Date('June 20, 2026 15:00:00').getTime();
    let currentSlide = 0;

    /* ===================== PANTALLA DE CARGA ===================== */
    function hidePreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(function() {
                preloader.classList.add('oculto');
            }, 1500);
        }
    }

    /* ===================== MÁSCARA DE ENTRADA ===================== */
    function initMascara() {
        const btnEntrar = document.getElementById('btnEntrar');
        const mascara = document.getElementById('mascara');
        const mainContent = document.getElementById('mainContent');
        const musicControl = document.getElementById('musicControl');

        if (!btnEntrar || !mascara) return;

        btnEntrar.addEventListener('click', function() {
            mascara.classList.add('oculta');
            document.body.classList.remove('bloquea-scroll');

            if (mainContent) {
                mainContent.style.display = 'block';
                setTimeout(function() {
                    mainContent.classList.add('visible');
                }, 100);
            }

            if (musicControl) {
                musicControl.classList.add('visible');
            }

            autoPlayMusic();
            startAnimations();
        });
    }

    /* ===================== CUENTA REGRESIVA ===================== */
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

    /* ===================== MÚSICA ===================== */
    function autoPlayMusic() {
        const music = document.getElementById('background-music');
        if (!music) return;

        music.muted = true;
        const playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise.then(function() {
                music.muted = false;
            }).catch(function() {
                music.muted = false;
            });
        }
    }

    function toggleMusic() {
        const music = document.getElementById('background-music');
        const btn = document.getElementById('music-toggle');
        if (!music || !btn) return;

        if (music.paused) {
            music.play().then(function() {
                btn.classList.add('reproduciendo');
            }).catch(function() {
                console.log('Reproducción bloqueada');
            });
        } else {
            music.pause();
            btn.classList.remove('reproduciendo');
        }
    }

    /* ===================== CARRUSEL ===================== */
    function initCarousel() {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (slides.length === 0) return;

        function showSlide(index) {
            slides.forEach(function(slide) {
                slide.classList.remove('active');
            });
            dots.forEach(function(dot) {
                dot.classList.remove('active');
            });

            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                showSlide(currentSlide - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                showSlide(currentSlide + 1);
            });
        }

        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
                showSlide(parseInt(this.dataset.slide));
            });
        });
    }

    /* ===================== CONFETTI ===================== */
    function createConfetti() {
        const container = document.getElementById('confetti-container');
        if (!container) return;

        const colors = ['#D4AF37', '#F5E6A3', '#9B59B6', '#D7BDE2', '#B8960C'];
        const shapes = ['square', 'circle'];

        for (let i = 0; i < 40; i++) {
            setTimeout(function() {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';

                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                const color = colors[Math.floor(Math.random() * colors.length)];

                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = color;
                confetti.style.animationDuration = (Math.random() * 8 + 10) + 's';
                confetti.style.animationDelay = Math.random() * 2 + 's';

                if (shape === 'circle') {
                    confetti.style.borderRadius = '50%';
                }

                container.appendChild(confetti);

                setTimeout(function() {
                    confetti.remove();
                }, 20000);
            }, i * 80);
        }
    }

    /* ===================== FLORES ===================== */
    function createFlowers() {
        const container = document.getElementById('flowers-container');
        if (!container) return;

        const flowers = ['🌸', '💮', '🌺', '🌷', '✿', '❀'];

        for (let i = 0; i < 30; i++) {
            setTimeout(function() {
                const flower = document.createElement('div');
                flower.className = 'flower';
                flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];

                flower.style.left = Math.random() * 100 + '%';
                flower.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
                flower.style.animationDuration = (Math.random() * 30 + 60) + 's';
                flower.style.animationDelay = Math.random() * 10 + 's';

                container.appendChild(flower);

                setTimeout(function() {
                    flower.remove();
                }, 100000);
            }, i * 3000);
        }
    }

    /* ===================== ANIMACIONES DE SCROLL ===================== */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate__animated');
        if (animatedElements.length === 0) return;

        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.visibility = 'visible';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(function(el) {
            el.style.visibility = 'hidden';
            observer.observe(el);
        });
    }

    /* ===================== INICIALIZACIÓN ===================== */
    function startAnimations() {
        createConfetti();
        createFlowers();
        setInterval(createFlowers, 100000);
    }

    function init() {
        hidePreloader();
        initMascara();
        updateCountdown();
        setInterval(updateCountdown, 1000);
        initCarousel();
        initScrollAnimations();

        const musicBtn = document.getElementById('music-toggle');
        if (musicBtn) {
            musicBtn.addEventListener('click', toggleMusic);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
