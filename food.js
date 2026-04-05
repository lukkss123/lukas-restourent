/* ===== Menu Data ===== */
const buttons = document.querySelectorAll(".menu-btn");
const container = document.getElementById("cards-container");

const menuData = {
  burger: [
    { title: "Cheese Burger", desc: "Juicy burger with cheddar cheese.", img: "https://source.unsplash.com/250x160/?burger" },
    { title: "Double Burger", desc: "Double patty with sauce.", img: "https://source.unsplash.com/250x160/?burger,double" }
  ],
  pizza: [
    { title: "Margherita", desc: "Classic Italian pizza.", img: "https://source.unsplash.com/250x160/?pizza" },
    { title: "Pepperoni", desc: "Spicy pepperoni pizza.", img: "https://source.unsplash.com/250x160/?pizza,pepperoni" }
  ],
  dessert: [
    { title: "Chocolate Cake", desc: "Rich chocolate cake.", img: "https://source.unsplash.com/250x160/?chocolate,cake" },
    { title: "Ice Cream", desc: "Vanilla ice cream scoop.", img: "https://source.unsplash.com/250x160/?ice-cream" }
  ]
};

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    loadCards(btn.dataset.category);
  });
});

function loadCards(category) {
  container.innerHTML = "";
  menuData[category].forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.img}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;
  });
}

/* ===== Reviews Data ===== */
const reviews = [
    {id:1,name:"სუფრა",location:"თბილისი",rating:4.9,type:"ტრადიციული ქართული რესტორანი",review:"საუკეთესო ქართული კერძები თბილისში — ავთენტური ხინკალი, ხაჭაპური და ბოსტნეული.",author:"ნინო გაგნიძე",avatar:"https://randomuser.me/api/portraits/women/44.jpg",restaurantImage:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"},
    {id:2,name:"კახური სუფრა",location:"კახეთი",rating:4.8,type:"კახური ტრადიციული რესტორანი",review:"შესანიშნავი კახური სამზარეულო და მშვენიერი ღვინო.",author:"გიორგი ხარაძე",avatar:"https://randomuser.me/api/portraits/men/32.jpg",restaurantImage:"https://images.unsplash.com/photo-1556911073-52527ac437e9?auto=format&fit=crop&w=800&q=80"},
    {id:3,name:"შავი ზღვის სუფრა",location:"ბათუმი",rating:4.7,type:"ზღვისპირა ქართული რესტორანი",review:"იდეალური ადგილია ზღვის პროდუქტებით და ადჟარული გემოთი.",author:"მარიამ ქევხიშვილი",avatar:"https://randomuser.me/api/portraits/women/65.jpg",restaurantImage:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"},
    {id:4,name:"მთიულური კარი",location:"თბილისი",rating:4.6,type:"მთიულური სამზარეულოს რესტორანი",review:"ტრადიციული მთიული კერძები და მშვენიერი მომსახურება.",author:"დავით ბერიძე",avatar:"https://randomuser.me/api/portraits/men/45.jpg",restaurantImage:"https://images.unsplash.com/photo-1543349680-8cd25c9b619a?auto=format&fit=crop&w=800&q=80"},
    {id:5,name:"ვინო და სუფრა",location:"კახეთი",rating:4.9,type:"ღვინის და ქართულო ბარი + რესტორანი",review:"საუკეთესო ადგილია კახეთში ღვინის დეგუსტაციისთვის და ქართული სამზარეულოს ჩასაცდელად.",author:"ანა მაისურაძე",avatar:"https://randomuser.me/api/portraits/women/22.jpg",restaurantImage:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"},
    {id:6,name:"ბათუმის სუფრა",location:"ბათუმი",rating:4.5,type:"ზღვისპირა ქართული რესტორანი",review:"ძალიან კარგი ადგილია ოჯახური სადილისთვის — მზით და ზღვის სუფრის გემო.",author:"ლევან ჭელიძე",avatar:"https://randomuser.me/api/portraits/men/67.jpg",restaurantImage:"https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80"}
];

function createCard(review) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.location = review.location;
    card.innerHTML = `
        <div class="food-image" style="background-image: url('${review.restaurantImage}')">
            <div class="rating">★ ${review.rating}</div>
        </div>
        <div class="card-content">
            <div class="restaurant-name">${review.name}</div>
            <div class="cuisine">${review.type} • ${review.location}</div>
            <div class="stars">${'★'.repeat(Math.floor(review.rating))}</div>
            <p class="review-text">"${review.review}"</p>
            <div class="author">
                <div class="avatar" style="background-image: url('${review.avatar}')"></div>
                <div class="author-info">
                    <h4>${review.author}</h4>
                    <p>რევიუერი</p>
                </div>
            </div>
        </div>
    `;
    return card;
}

function renderCards(filteredReviews) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    filteredReviews.forEach(review => {
        container.appendChild(createCard(review));
    });
}

function filterCards(location) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.toggle('active', 
            (location === 'all' && btn.textContent === 'ყველა') || 
            btn.textContent === location
        );
    });

    const filtered = location === 'all' 
        ? reviews 
        : reviews.filter(r => r.location === location);

    renderCards(filtered);
}

// Init
window.onload = () => {
    loadCards("burger");
    renderCards(reviews);
};