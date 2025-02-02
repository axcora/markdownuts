const donutData = {
            name: "{{title}}",
            description: "{{description}}",
            price: "{{price}}",
            image: "{{image}}",
            ingredients: [{%- for s in features %}
                "{{s}}",{%- if not loop.last %} {% endif %}{%- endfor %}
            ]
        };
        function populateDonutDetails() {
            document.getElementById('donutName').textContent = donutData.name;
            document.getElementById('donutDescription').textContent = donutData.description;
            document.getElementById('donutPrice').textContent = donutData.price;
            document.getElementById('donutImage').src = donutData.image;
            document.getElementById('donutImage').alt = donutData.name;

            const ingredientsList = document.getElementById('ingredientsList');
            donutData.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
        }
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        function applySplatColor() {
            const splat = document.querySelector('.splat');
            splat.style.backgroundColor = getRandomColor();
        }
        const orderButton = document.querySelector('.order-button');
        orderButton.addEventListener('mouseover', () => {
            orderButton.style.transform = 'scale(1.1) rotate(-5deg)';        });
        orderButton.addEventListener('mouseout', () => {
            orderButton.style.transform = 'scale(1) rotate(0deg)';
        });
        window.onload = function() {
            populateDonutDetails();
            applySplatColor();
        };
