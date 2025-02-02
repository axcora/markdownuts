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