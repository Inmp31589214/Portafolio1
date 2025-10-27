// Animación fade-in al scrollear
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
      if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
              observer.unobserve(entry.target);
                });
                }, appearOptions);
                faders.forEach(fader => { appearOnScroll.observe(fader); });

                // Carrusel manual
                const track = document.querySelector('.carousel-track');
                const prev = document.querySelector('.prev');
                const next = document.querySelector('.next');
                let index = 0;

                next.addEventListener('click', () => {
                  index = (index + 1) % 3;
                    track.style.transform = `translateX(-${index * 320}px)`;
                    });

                    prev.addEventListener('click', () => {
                      index = (index - 1 + 3) % 3;
                        track.style.transform = `translateX(-${index * 320}px)`;
                        });