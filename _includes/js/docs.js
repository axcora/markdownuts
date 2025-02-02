    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const splat = item.querySelector('.splat');
        splat.style.left = Math.random() * 80 + '%';
        splat.style.top = Math.random() * 80 + '%';
    });
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05) rotate(-3deg)';
            item.style.backgroundColor = '#FF6347';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'rotate(3deg)';
            item.style.backgroundColor = '#00CED1';
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
    const splats = document.querySelectorAll('.splat');
    splats.forEach(splat => {
        splat.style.backgroundColor = getRandomColor();
    });
