const blogImage = document.querySelector('.blog-post img');
        const rotation = Math.random() * 5 - 2.5;
        blogImage.style.transform = `rotate(${rotation}deg)`;
        const navButtons = document.querySelectorAll('.nav-button');
        navButtons.forEach(button => {
            button.addEventListener('mouseover', () => {
                if (!button.classList.contains('disabled')) {
                    button.style.transform = 'scale(1.1) rotate(-3deg)';
                }
            });
            button.addEventListener('mouseout', () => {
                if (!button.classList.contains('disabled')) {
                    button.style.transform = 'scale(1) rotate(0deg)';
                }
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