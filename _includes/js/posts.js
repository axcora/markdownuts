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
