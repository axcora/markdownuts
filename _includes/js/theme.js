        const menuGrid = document.getElementById('menuGrid');

        displayMenuItems(currentPage);
        updatePagination();

        [prevBtn, nextBtn].forEach(btn => {
            btn.addEventListener('mouseover', () => {
                if (!btn.disabled) {
                    btn.style.transform = 'scale(1.1) rotate(-3deg)';
                }
            });
            btn.addEventListener('mouseout', () => {
                if (!btn.disabled) {
                    btn.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function applySplatColors() {
            const splats = document.querySelectorAll('.splat');
            splats.forEach(splat => {
                splat.style.backgroundColor = getRandomColor();
            });
        }

        function refreshMenu() {
            displayMenuItems(currentPage);
            applySplatColors();
        }
