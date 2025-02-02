const donutData = {
            name: "Brutalisme",
            description: "A Starter Projects For your website",
            price: "Free",
            image: "/media/themes/markdownuts-brutalisme.webp",
            ingredients: [
                "Brutal Concept", 
                "Clean Design", 
                "Blog Pagination", 
                "Post Pagination", 
                "Navbar Menu", 
                "Dark Light Mode",
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