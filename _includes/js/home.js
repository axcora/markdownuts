        const donut = document.getElementById('donut');
        for (let i = 0; i < 20; i++) {
            const sprinkle = document.createElement('div');
            sprinkle.classList.add('sprinkle');
            sprinkle.style.left = Math.random() * 180 + 10 + 'px';
            sprinkle.style.top = Math.random() * 180 + 10 + 'px';
            sprinkle.style.backgroundColor = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'][Math.floor(Math.random() * 4)];
            donut.appendChild(sprinkle);
        }
