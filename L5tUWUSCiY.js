function addRandomRotation() {
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach(item => {
                const rotation = Math.random() * 10 - 5; // Rotasi antara -5 dan 5 derajat
                item.style.transform = `rotate(${rotation}deg)`;
            });
        }

        window.onload = addRandomRotation;
        function addRandomRotationToPolaroids() {
            const polaroids = document.querySelectorAll('.polaroid');
            polaroids.forEach(polaroid => {
                const rotation = Math.random() * 20 - 10; // Rotasi antara -10 dan 10 derajat
                polaroid.style.transform = `rotate(${rotation}deg)`;
            });
        }

        window.onload = function() {
            addRandomRotation();
            addRandomRotationToPolaroids();
        };
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(button => {
            button.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.05) rotate(-3deg)';
            });
            button.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });
const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
    document.querySelectorAll(".nav-links li").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }));
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#FF1493';
            link.style.color = '#FFF';
            link.style.transform = 'scale(1.1)';
        });

        link.addEventListener('mouseout', () => {
            if (!link.classList.contains('active')) {
                link.style.backgroundColor = '#FFD700';
                link.style.color = '#000';
            }
            link.style.transform = 'scale(1)';
        });
    });