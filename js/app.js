/**
 * PET.IT — Luxury Pet Boutique & Ethical Adoption Platform
 * Application Logic, State Engine, Interactive Features, Adoption Workflow & Animations
 */

// --- Global Catalog Data (Companions, Heritage Livestock & Luxury Tech) ---
const PETIT_CATALOG = [
  {
    id: "pet-1",
    name: "Sir Winston",
    category: "dogs",
    habitat: "indoor",
    type: "pet",
    breed: "Pembroke Welsh Corgi",
    age: "4 months",
    gender: "Male",
    price: 350,
    rating: 4.9,
    reviewsCount: 28,
    image: "assets/corgy.webp",
    badge: "Popular Companion",
    vaccinated: true,
    microchipped: true,
    temperament: ["Playful", "Affectionate", "Intelligent", "Social"],
    description: "Sir Winston is a joyful, energetic purebred Corgi puppy with charming personality and a heart full of love. Great with kids and apartment living.",
    diet: "Royal Canin Puppy Formula",
    weight: "5.2 kg"
  },
  {
    id: "pet-2",
    name: "Duchess Luna",
    category: "cats",
    habitat: "indoor",
    type: "pet",
    breed: "British Shorthair Grey",
    age: "6 months",
    gender: "Female",
    price: 420,
    rating: 5.0,
    reviewsCount: 34,
    image: "assets/cat-British-Shorthair-grey.webp",
    badge: "Championship Lineage",
    vaccinated: true,
    microchipped: true,
    temperament: ["Calm", "Gentle", "Independent", "Cuddly"],
    description: "Duchess Luna features a velvet slate-blue coat with striking copper eyes. Calm, dignified, and the ultimate purring couch companion.",
    diet: "Purina Pro Plan Wet & Dry Salmon Blend",
    weight: "3.8 kg"
  },
  {
    id: "pet-3",
    name: "Snowflake & Pippin",
    category: "rabbits",
    habitat: "indoor",
    type: "pet",
    breed: "Snow White Holland Lop",
    age: "3 months",
    gender: "Bonded Pair (M/F)",
    price: 180,
    rating: 4.8,
    reviewsCount: 19,
    image: "assets/white rabbit.webp",
    badge: "Bonded Pair",
    vaccinated: true,
    microchipped: false,
    temperament: ["Gentle", "Quiet", "Friendly", "Curious"],
    description: "A bonded pair of ultra-fluffy white bunnies. Incredibly gentle, litter-trained, and adore fresh hay and forehead tickles.",
    diet: "Timothy Hay & Organic Herb Crunch",
    weight: "1.4 kg each"
  },
  {
    id: "pet-4",
    name: "Captain Thor",
    category: "dogs",
    habitat: "yard",
    type: "pet",
    breed: "German Shepherd Working Line",
    age: "5 months",
    gender: "Male",
    price: 550,
    rating: 4.9,
    reviewsCount: 42,
    image: "assets/german sheeperd.webp",
    badge: "Loyal Guardian",
    vaccinated: true,
    microchipped: true,
    temperament: ["Alert", "Loyal", "Highly Trainable", "Protective"],
    description: "Thor is an exceptional young German Shepherd with brilliant obedience instincts, strong health screening, and a gentle heart for family.",
    diet: "High-Protein Raw & Kibble Mix",
    weight: "14.5 kg"
  },
  {
    id: "pet-5",
    name: "Mochi",
    category: "cats",
    habitat: "indoor",
    type: "pet",
    breed: "Scottish Fold Classic",
    age: "5 months",
    gender: "Female",
    price: 490,
    rating: 4.9,
    reviewsCount: 22,
    image: "assets/breed-Scottish-trait-cat-mutation-ears-ear.webp",
    badge: "Rare Fold",
    vaccinated: true,
    microchipped: true,
    temperament: ["Sweet", "Quiet", "Lap Cat", "Sociable"],
    description: "Mochi has the signature folded ears and big owl eyes. She loves following you around and napping comfortably on soft blankets.",
    diet: "Instinct Grain-Free Kitten Blend",
    weight: "2.9 kg"
  },
  {
    id: "pet-6",
    name: "Cleo & Amber",
    category: "cats",
    habitat: "indoor",
    type: "pet",
    breed: "Calico Sunshine Shorthair",
    age: "4 months",
    gender: "Female",
    price: 320,
    rating: 4.7,
    reviewsCount: 16,
    image: "assets/cat-Alison-Eldridge-orange-Calico.webp",
    badge: "Sweet Spirit",
    vaccinated: true,
    microchipped: true,
    temperament: ["Inquisitive", "Affectionate", "Vocal", "Playful"],
    description: "Striking tri-color Calico coat with sunny patches. Incredibly playful with feather toys and loves warm sunbeams.",
    diet: "Wellness Core Grain-Free Poultry",
    weight: "2.6 kg"
  },
  {
    id: "pet-7",
    name: "Zeus the Husky",
    category: "dogs",
    habitat: "yard",
    type: "pet",
    breed: "Siberian Husky & Eskimo Spitz",
    age: "7 months",
    gender: "Male",
    price: 480,
    rating: 5.0,
    reviewsCount: 31,
    image: "assets/eskimo.webp",
    badge: "Blue-Eyed Prince",
    vaccinated: true,
    microchipped: true,
    temperament: ["Energetic", "Vocal", "Loving", "Adventure-Ready"],
    description: "Stunning icy blue eyes and thick winter coat. Loves running, hiking trails, and is deeply social with both dogs and humans.",
    diet: "Orijen Amazing Grains Active Diet",
    weight: "18.2 kg"
  },
  {
    id: "pet-8",
    name: "Rio the Mallard Drake",
    category: "exotic",
    habitat: "yard",
    type: "pet",
    breed: "Ornamental Mallard & Waterfowl",
    age: "8 months",
    gender: "Male",
    price: 140,
    rating: 4.8,
    reviewsCount: 12,
    image: "assets/mallard-duck.webp",
    badge: "Garden Companion",
    vaccinated: true,
    microchipped: false,
    temperament: ["Docile", "Charming", "Loves Water", "Hardy"],
    description: "Vibrant emerald head feathers and iridescent wing accents. Thrives in garden enclosures with water ponds.",
    diet: "Waterfowl Pellets & Mixed Green Forage",
    weight: "1.2 kg"
  },
  {
    id: "pet-9",
    name: "Barnaby the Forest Cat",
    category: "cats",
    habitat: "indoor",
    type: "pet",
    breed: "Norwegian Forest Tabby",
    age: "1 year",
    gender: "Male",
    price: 380,
    rating: 4.9,
    reviewsCount: 19,
    image: "assets/Norwegian-Forest-cat-tabby.webp",
    badge: "Gentle Giant",
    vaccinated: true,
    microchipped: true,
    temperament: ["Affectionate", "Intelligent", "Majestic", "Good with Dogs"],
    description: "Fluffy tufted ears and majestic thick coat. Incredibly calm, friendly, and loves climbing high vantage points.",
    diet: "Royal Canin Forest Formula",
    weight: "5.5 kg"
  },
  {
    id: "pet-10",
    name: "Prince Leo",
    category: "cats",
    habitat: "indoor",
    type: "pet",
    breed: "Royal Siamese Blue-Point",
    age: "5 months",
    gender: "Male",
    price: 450,
    rating: 4.9,
    reviewsCount: 25,
    image: "assets/Siamese-cat.webp",
    badge: "Vocal Royal",
    vaccinated: true,
    microchipped: true,
    temperament: ["Vocal", "Intelligent", "Deeply Devoted", "Agile"],
    description: "Classic sapphire blue eyes with rich dark seal points. Extremely communicative, loves shoulder rides and deep bonding.",
    diet: "Royal Canin Siamese Specific Formula",
    weight: "3.2 kg"
  },
  {
    id: "pet-11",
    name: "Yuki the Snowshoe",
    category: "cats",
    habitat: "indoor",
    type: "pet",
    breed: "Snowshoe Velvet Kitten",
    age: "4 months",
    gender: "Female",
    price: 390,
    rating: 4.8,
    reviewsCount: 18,
    image: "assets/Snowshoe-cat.webp",
    badge: "Rare Mittens",
    vaccinated: true,
    microchipped: true,
    temperament: ["Playful", "Gentle", "Water-Tolerant", "Loving"],
    description: "Distinctive white paws ('snowshoes') and inverted V facial mask. Soft-spoken, affectionate, and great with gentle children.",
    diet: "Hill's Science Diet Indoor Kitten",
    weight: "2.7 kg"
  },
  {
    id: "pet-12",
    name: "Oliver Polydactyl",
    category: "cats",
    habitat: "indoor",
    type: "pet",
    breed: "Polydactyl Snow Lynx",
    age: "6 months",
    gender: "Male",
    price: 410,
    rating: 5.0,
    reviewsCount: 21,
    image: "assets/polydactyl cat.webp",
    badge: "Lucky Mitten Paws",
    vaccinated: true,
    microchipped: true,
    temperament: ["Clumsy Joy", "Sweet", "Curious", "Loyal"],
    description: "Possesses extra thumb-like digits that give him adorable 'catcher mitt' paws. Renowned historical seafaring good luck charm.",
    diet: "Blue Buffalo Wilderness Grain Free",
    weight: "3.6 kg"
  },
  {
    id: "pet-13",
    name: "Sterling & Echo",
    category: "dogs",
    habitat: "yard",
    type: "pet",
    breed: "Australian Shepherd & Border Collie",
    age: "5 months",
    gender: "Male",
    price: 520,
    rating: 5.0,
    reviewsCount: 39,
    image: "The 15 Most Realistic Australian Shepherd and Border Collie Paintings.jfif",
    badge: "Agility Master",
    vaccinated: true,
    microchipped: true,
    temperament: ["Genius IQ", "High Energy", "Herding Instinct", "Devoted"],
    description: "Incredible tri-color markings with razor-sharp working intelligence. Perfect for active hikers, flyball, and agility competitions.",
    diet: "Taste of the Wild High Prairie Canine",
    weight: "12.8 kg"
  },
  {
    id: "pet-14",
    name: "Apollo & Athena",
    category: "livestock",
    habitat: "pasture",
    type: "pet",
    breed: "Kalahari Red Breeding Goats",
    age: "7 months",
    gender: "Pair (M/F)",
    price: 360,
    rating: 4.9,
    reviewsCount: 15,
    image: "assets/Kalahri-goats-640x360.jpg",
    badge: "Champion Heritage",
    vaccinated: true,
    microchipped: true,
    temperament: ["Hardy", "Docile", "Weed-Clearing", "Social Herd"],
    description: "Purebred Kalahari Red goats renowned for exceptional disease resistance, rich red coats, and docile farmstead temperament.",
    diet: "Pasture Forage, Alfalfa & Mineral Salt Lick",
    weight: "22 kg each"
  },
  {
    id: "pet-15",
    name: "Sultan the Sahelian Ram",
    category: "livestock",
    habitat: "pasture",
    type: "pet",
    breed: "Royal Sahelian Brown Ram",
    age: "11 months",
    gender: "Male",
    price: 490,
    rating: 5.0,
    reviewsCount: 27,
    image: "assets/brown ram.jfif",
    badge: "Grand Stud Pedigree",
    vaccinated: true,
    microchipped: true,
    temperament: ["Majestic", "Calm", "Strong Build", "Hardy"],
    description: "Prized Sahelian breed with regal spiraled horns, lustrous chestnut fleece, and robust immune health. Great for estate pastures.",
    diet: "Pasture Grass, Napier Hay & Molasses Grain",
    weight: "48 kg"
  },
  {
    id: "pet-16",
    name: "Buttercup",
    category: "livestock",
    habitat: "pasture",
    type: "pet",
    breed: "White Fulani & Dairy Cross Heifer",
    age: "9 months",
    gender: "Female",
    price: 680,
    rating: 4.9,
    reviewsCount: 14,
    image: "assets/download.jfif",
    badge: "Gentle Pastoral",
    vaccinated: true,
    microchipped: true,
    temperament: ["Gentle", "Docile", "Pasture Friendly", "Affectionate"],
    description: "Graceful young dairy heifer with gentle black-and-white markings. Hand-raised, calm around humans, and ready for pastoral estate life.",
    diet: "Lush Pasture Grass & Concentrated Dairy Mash",
    weight: "110 kg"
  },
  {
    id: "pet-17",
    name: "Pegasus & Pride",
    category: "livestock",
    habitat: "pasture",
    type: "pet",
    breed: "Thoroughbred Foal & Riding Lineage",
    age: "10 months",
    gender: "Colt",
    price: 950,
    rating: 5.0,
    reviewsCount: 32,
    image: "assets/IMG-20220613-WA0048.jpg",
    badge: "Equestrian Lineage",
    vaccinated: true,
    microchipped: true,
    temperament: ["Graceful", "Spirited", "Intelligent", "Noble"],
    description: "A breathtaking young thoroughbred colt with balanced conformation, fluid gaits, and gentle groundwork desensitization.",
    diet: "Timothy Hay, Rolled Oats & Vitamin Minerals",
    weight: "165 kg"
  },
  {
    id: "pet-18",
    name: "Sir Gobbles",
    category: "livestock",
    habitat: "pasture",
    type: "pet",
    breed: "Royal Heritage Bronze Turkey",
    age: "6 months",
    gender: "Male",
    price: 130,
    rating: 4.7,
    reviewsCount: 11,
    image: "assets/IMG-20220613-WA0053.jpg",
    badge: "Free-Range Heritage",
    vaccinated: true,
    microchipped: false,
    temperament: ["Curious", "Strutting", "Hardy", "Loves Forage"],
    description: "Spectacular iridescent bronze-green plumage and proud fan displays. Hand-fed and thrives in expansive garden paddocks.",
    diet: "Cracked Corn, Free-Range Greens & Poultry Mash",
    weight: "8.5 kg"
  },
  {
    id: "pet-19",
    name: "Pippin & Penny",
    category: "livestock",
    habitat: "yard",
    type: "pet",
    breed: "Domesticated Greater Grasscutter Pair",
    age: "5 months",
    gender: "Breeding Pair (M/F)",
    price: 210,
    rating: 4.8,
    reviewsCount: 16,
    image: "assets/Grasscutter-Farming.jpg",
    badge: "Eco-Farmstead Pair",
    vaccinated: true,
    microchipped: false,
    temperament: ["Docile", "Quiet", "Clean", "Herbivorous"],
    description: "Docile domesticated grasscutter pair from top selective breeding. Quiet, clean, and thrive on fresh elephant grass and sugar cane.",
    diet: "Elephant Grass, Sweet Potato Stems & Grains",
    weight: "3.2 kg each"
  },
  {
    id: "pet-20",
    name: "Captain Quack & Friends",
    category: "exotic",
    habitat: "yard",
    type: "pet",
    breed: "Heritage Muscovy Duck Duo",
    age: "6 months",
    gender: "Pair (M/F)",
    price: 120,
    rating: 4.8,
    reviewsCount: 14,
    image: "assets/Muscovy-Duck-051a.jpg",
    badge: "Silent Ducks",
    vaccinated: true,
    microchipped: false,
    temperament: ["Quiet (No Quacking)", "Friendly", "Slug Hunter", "Docile"],
    description: "Muscovy ducks are uniquely quiet (making only soft hissing sounds), calm, and make wonderful slug and insect controllers in garden yards.",
    diet: "Duck Floating Pellets & Garden Greens",
    weight: "2.8 kg each"
  },
  {
    id: "prod-1",
    name: "Royal Velvet Orthopedic Pet Bed",
    category: "supplies",
    habitat: "indoor",
    type: "product",
    breed: "Memory Foam & Washable Velvet",
    age: "All Life Stages",
    gender: "Unisex",
    price: 85,
    rating: 4.9,
    reviewsCount: 57,
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80",
    badge: "Best Seller",
    vaccinated: false,
    microchipped: false,
    temperament: ["Joint Relief", "Waterproof Liner", "Machine Washable"],
    description: "High-density orthopedic memory foam wrapped in plush micro-velvet. Relieves pressure points for older dogs and keeps pets cozy.",
    diet: "N/A",
    weight: "2.5 kg"
  },
  {
    id: "prod-2",
    name: "Smart Automatic Feeder Pro with HD Cam",
    category: "supplies",
    habitat: "indoor",
    type: "product",
    breed: "Wi-Fi Enabled & App Controlled",
    age: "Cats & Dogs",
    gender: "Universal",
    price: 129,
    rating: 4.8,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
    badge: "Smart Tech",
    vaccinated: false,
    microchipped: false,
    temperament: ["1080p Video", "Two-Way Audio", "Scheduled Portions"],
    description: "Feed your pets on schedule and watch them live with 1080p wide-angle night vision and instant smartphone notifications.",
    diet: "Compatible with 2-12mm Dry Kibble",
    weight: "1.8 kg"
  },
  {
    id: "prod-3",
    name: "Organic Gourmet Salmon & Pumpkin Bites",
    category: "supplies",
    habitat: "indoor",
    type: "product",
    breed: "Grain-Free Nutritional Treats",
    age: "Puppy to Senior",
    gender: "Universal",
    price: 24,
    rating: 5.0,
    reviewsCount: 114,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80",
    badge: "100% Organic",
    vaccinated: false,
    microchipped: false,
    temperament: ["Rich in Omega-3", "No Artificial Colors", "Dental Health"],
    description: "Handcrafted oven-baked treats made with wild Atlantic salmon and organic pumpkin puree for shiny coats and healthy digestion.",
    diet: "Pure Salmon & Organic Pumpkin",
    weight: "500g"
  },
  {
    id: "prod-4",
    name: "GPS Real-Time Smart Collar & Health Tracker",
    category: "supplies",
    habitat: "yard",
    type: "product",
    breed: "Waterproof GPS & Activity Monitor",
    age: "All Breeds",
    gender: "Universal",
    price: 79,
    rating: 4.9,
    reviewsCount: 63,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
    badge: "Smart Security",
    vaccinated: false,
    microchipped: false,
    temperament: ["Live Geo-Fence", "Heart Rate Monitor", "Battery 14-Days"],
    description: "Real-time satellite GPS tracking with instant escape alerts on your phone, daily step counts, and sleep analysis.",
    diet: "N/A",
    weight: "65g"
  }
];

// --- App State Engine ---
const State = {
  cart: JSON.parse(localStorage.getItem('petit_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('petit_wishlist') || '[]'),
  theme: localStorage.getItem('petit_theme') || 'light',
  user: JSON.parse(localStorage.getItem('petit_user') || 'null'),
  applications: JSON.parse(localStorage.getItem('petit_applications') || '[]'),
  activeCategory: 'all',
  activeHabitat: 'all',
  searchQuery: '',
  sortBy: 'featured',
  discountPercent: 0,
  appliedPromoCode: null,
  compareList: [],
  currentAdoptionPet: null,
  quizAnswers: {},
  quizStep: 1
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAuthUI();
  renderCatalog();
  updateCartUI();
  updateWishlistUI();
  updateCompareUI();
  initEventListeners();
  initIntersectionObserver();
});

// --- Theme Management ---
function initTheme() {
  document.documentElement.setAttribute('data-theme', State.theme);
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = State.theme === 'dark' ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
  }
  const mobileThemeBtn = document.getElementById('mobileThemeToggleBtn');
  if (mobileThemeBtn) {
    mobileThemeBtn.innerHTML = State.theme === 'dark' ? '<i class="bi bi-sun-fill"></i> Light Mode' : '<i class="bi bi-moon-stars-fill"></i> Dark Mode';
  }
}

function toggleTheme() {
  State.theme = State.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('petit_theme', State.theme);
  initTheme();
  showToast('Theme Updated', `Switched to ${State.theme} mode`, 'info');
}

// --- Auth State UI ---
function initAuthUI() {
  const accountBtn = document.getElementById('accountBtn');
  const mobileAccountBtn = document.getElementById('mobileAccountBtn');

  if (State.user) {
    const firstName = State.user.name.split(' ')[0];
    const userBadgeHtml = `
      <div style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
        <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--primary); color: #fff; font-weight: 800; font-size: 0.8rem; display: flex; align-items: center; justify-content: center;">
          ${firstName.charAt(0)}
        </div>
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">${firstName}</span>
        <i class="bi bi-chevron-down" style="font-size: 0.75rem; color: var(--text-muted);"></i>
      </div>
    `;

    if (accountBtn) {
      accountBtn.innerHTML = userBadgeHtml;
      accountBtn.className = "btn btn-secondary btn-sm";
      accountBtn.title = `Pet Parent: ${State.user.name} (Click for Dashboard)`;
      accountBtn.onclick = (e) => {
        e.preventDefault();
        openProfileModal();
      };
    }

    if (mobileAccountBtn) {
      mobileAccountBtn.innerHTML = `<i class="bi bi-person-circle"></i> Dashboard (${firstName})`;
      mobileAccountBtn.onclick = (e) => {
        e.preventDefault();
        toggleMobileMenu();
        openProfileModal();
      };
    }
  } else {
    if (accountBtn) {
      accountBtn.innerHTML = `<i class="bi bi-person-fill"></i> Sign In`;
      accountBtn.className = "btn btn-secondary btn-sm";
      accountBtn.title = "Sign In / Register";
      accountBtn.onclick = () => {
        window.location.href = 'Login.html';
      };
    }

    if (mobileAccountBtn) {
      mobileAccountBtn.innerHTML = `<i class="bi bi-box-arrow-in-right"></i> Sign In / Register`;
      mobileAccountBtn.onclick = () => {
        window.location.href = 'Login.html';
      };
    }
  }
}

// --- Mobile Navigation Drawer Toggle ---
function toggleMobileMenu() {
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (backdrop) {
    backdrop.classList.toggle('active');
  }
}

// --- Catalog Rendering & Filtering Engine ---
function renderCatalog() {
  const grid = document.getElementById('productCatalogGrid');
  const countBadge = document.getElementById('catalogCountBadge');
  if (!grid) return;

  let items = [...PETIT_CATALOG];

  // Category filter
  if (State.activeCategory !== 'all') {
    items = items.filter(item => item.category === State.activeCategory);
  }

  // Habitat filter
  if (State.activeHabitat !== 'all') {
    items = items.filter(item => item.habitat === State.activeHabitat);
  }

  // Search filter
  if (State.searchQuery.trim() !== '') {
    const q = State.searchQuery.toLowerCase();
    items = items.filter(item => 
      item.name.toLowerCase().includes(q) ||
      item.breed.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.temperament && item.temperament.some(t => t.toLowerCase().includes(q)))
    );
  }

  // Sorting
  if (State.sortBy === 'price-low') {
    items.sort((a, b) => a.price - b.price);
  } else if (State.sortBy === 'price-high') {
    items.sort((a, b) => b.price - a.price);
  } else if (State.sortBy === 'rating') {
    items.sort((a, b) => b.rating - a.rating);
  }

  if (countBadge) {
    countBadge.innerText = `Showing ${items.length} ${items.length === 1 ? 'companion' : 'companions & items'}`;
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-muted);">🐾</div>
        <h3>No Companions Found</h3>
        <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try adjusting your filters, habitat criteria, or search keywords.</p>
        <button class="btn btn-primary btn-sm" style="margin-top: 1.2rem;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(item => {
    const isWishlisted = State.wishlist.includes(item.id);
    const isCompared = State.compareList.includes(item.id);
    const isAdoption = item.type === 'pet';

    let habitatLabel = '🏢 Indoor';
    let habitatClass = 'indoor';
    if (item.habitat === 'yard') {
      habitatLabel = '🏡 Yard';
      habitatClass = 'yard';
    } else if (item.habitat === 'pasture') {
      habitatLabel = '🌾 Pasture';
      habitatClass = 'pasture';
    }

    return `
      <div class="pet-card animate-on-scroll" data-id="${item.id}">
        <div class="pet-card-image-wrap">
          <img src="${item.image}" alt="${item.name}" class="pet-card-image" loading="lazy" onerror="this.src='assets/logo.jpeg'">
          <span class="pet-badge-category">${item.category}</span>
          
          <div style="position: absolute; top: 0.8rem; right: 0.8rem; display: flex; gap: 0.4rem; z-index: 3;">
            ${isAdoption ? `
              <button class="btn-icon" style="width: 34px; height: 34px; background: rgba(255,255,255,0.9); backdrop-filter: blur(4px); ${isCompared ? 'color: var(--primary); border-color: var(--primary);' : ''}" onclick="toggleCompare('${item.id}', event)" title="${isCompared ? 'Remove from Compare' : 'Compare Companion'}">
                <i class="bi ${isCompared ? 'bi-check-circle-fill' : 'bi-arrow-left-right'}"></i>
              </button>
            ` : ''}
            <button class="pet-wishlist-btn ${isWishlisted ? 'active' : ''}" style="position: static;" onclick="toggleWishlist('${item.id}', event)" title="Save to Wishlist">
              <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
            </button>
          </div>

          <div class="pet-quick-view-overlay">
            <button class="btn btn-secondary btn-sm" onclick="openQuickView('${item.id}')">
              <i class="bi bi-eye"></i> Quick View
            </button>
          </div>
        </div>

        <div class="pet-card-body">
          <div class="pet-card-header">
            <div>
              <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.2rem;">
                <h3 class="pet-card-title">${item.name}</h3>
                ${isAdoption ? `<span class="habitat-tag ${habitatClass}">${habitatLabel}</span>` : ''}
              </div>
              <p class="pet-card-breed">${item.breed} • <span style="color:var(--text-muted)">${item.age}</span></p>
            </div>
            <div class="pet-rating">
              <i class="bi bi-star-fill text-warning"></i>
              <span>${item.rating}</span>
            </div>
          </div>

          <div class="pet-tags">
            ${item.vaccinated ? '<span class="pet-tag-pill" style="color:var(--secondary); background:var(--secondary-light);"><i class="bi bi-shield-check"></i> Vaccinated</span>' : ''}
            ${item.temperament.slice(0, 2).map(t => `<span class="pet-tag-pill">${t}</span>`).join('')}
          </div>

          <div class="pet-card-footer">
            <div class="pet-price-box">
              <span class="pet-price-label">${isAdoption ? 'Adoption Fee' : 'Price'}</span>
              <span class="pet-price-value">$${item.price}</span>
            </div>
            <div style="display: flex; gap: 0.4rem;">
              ${isAdoption ? `
                <button class="btn btn-primary btn-sm" onclick="openAdoptionModal('${item.id}', event)">
                  <i class="bi bi-heart-half"></i> Apply to Adopt
                </button>
              ` : `
                <button class="btn btn-primary btn-sm" onclick="addToCart('${item.id}', 1, event)">
                  <i class="bi bi-bag-plus"></i> Add to Cart
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  State.activeCategory = 'all';
  State.activeHabitat = 'all';
  State.searchQuery = '';
  State.sortBy = 'featured';

  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.category === 'all');
  });

  document.querySelectorAll('.habitat-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.habitat === 'all');
  });

  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  renderCatalog();
}

// --- Quick View Modal System ---
function openQuickView(id) {
  const item = PETIT_CATALOG.find(x => x.id === id);
  if (!item) return;

  const modal = document.getElementById('quickViewModal');
  const modalContent = document.getElementById('quickViewContent');
  if (!modal || !modalContent) return;

  const isWishlisted = State.wishlist.includes(item.id);
  const isCompared = State.compareList.includes(item.id);
  const isAdoption = item.type === 'pet';

  modalContent.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 2rem; padding: 2rem;">
      <div style="position: relative; border-radius: var(--radius-lg); overflow: hidden; height: 100%; min-height: 320px; background: var(--bg-muted);">
        <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='assets/logo.jpeg'">
        <span class="section-badge" style="position: absolute; top: 1rem; left: 1rem; margin: 0;">${item.badge}</span>
      </div>

      <div style="display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <div>
            <h2 style="font-size: 1.8rem; margin: 0;">${item.name}</h2>
            <p style="color: var(--primary); font-weight: 700; margin-top: 0.2rem;">
              ${item.breed} • ${item.gender} • ${item.age}
            </p>
          </div>
          <div style="display: flex; gap: 0.4rem;">
            ${isAdoption ? `
              <button class="btn-icon" style="${isCompared ? 'color: var(--primary); border-color: var(--primary);' : ''}" onclick="toggleCompare('${item.id}', event)" title="Compare">
                <i class="bi ${isCompared ? 'bi-check-circle-fill' : 'bi-arrow-left-right'}"></i>
              </button>
            ` : ''}
            <button class="btn-icon ${isWishlisted ? 'text-danger' : ''}" onclick="toggleWishlist('${item.id}', event)" title="Wishlist">
              <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
            </button>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.2rem;">
          <div style="color: #f59e0b; display: flex; gap: 2px;">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
          <span style="font-size: 0.88rem; font-weight: 700;">${item.rating}</span>
          <span style="color: var(--text-muted); font-size: 0.85rem;">(${item.reviewsCount} verified reviews)</span>
        </div>

        <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">${item.description}</p>

        <div style="background: var(--bg-muted); padding: 1.2rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.9rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.6rem; letter-spacing: 0.05em;">Companion Specifications</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; font-size: 0.88rem;">
            <div><strong>Health Cert:</strong> ${item.vaccinated ? '<span style="color:var(--secondary)">Fully Verified</span>' : 'Standard'}</div>
            <div><strong>Microchip:</strong> ${item.microchipped ? '<span style="color:var(--secondary)">Yes (Universal)</span>' : 'Available on Handover'}</div>
            <div><strong>Est. Weight:</strong> ${item.weight}</div>
            <div><strong>Diet:</strong> ${item.diet}</div>
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color);">
          <div>
            <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Total ${isAdoption ? 'Adoption Fee' : 'Price'}</span>
            <span style="font-size: 1.8rem; font-weight: 800; color: var(--primary); font-family: var(--font-heading);">$${item.price}</span>
          </div>
          <div style="display: flex; gap: 0.6rem;">
            ${isAdoption ? `
              <button class="btn btn-primary btn-lg" onclick="closeModals(); openAdoptionModal('${item.id}');">
                <i class="bi bi-heart-half"></i> Apply to Adopt ${item.name}
              </button>
            ` : `
              <button class="btn btn-primary btn-lg" onclick="addToCart('${item.id}', 1, event); closeModals();">
                <i class="bi bi-bag-plus"></i> Add to Cart
              </button>
            `}
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

// --- Pet Comparison Engine ---
function toggleCompare(id, event = null) {
  if (event) event.stopPropagation();

  const index = State.compareList.indexOf(id);
  if (index > -1) {
    State.compareList.splice(index, 1);
    showToast('Removed from Comparison', 'Pet removed from comparison drawer.', 'info');
  } else {
    if (State.compareList.length >= 2) {
      State.compareList.shift(); // keep max 2
    }
    State.compareList.push(id);
    showToast('Added to Comparison ⚖️', 'Compare up to 2 companions side-by-side!', 'success');
  }

  updateCompareUI();
  renderCatalog();
}

function updateCompareUI() {
  const bar = document.getElementById('compareFloatingBar');
  const countEl = document.getElementById('compareCountText');
  const itemsContainer = document.getElementById('comparePillsContainer');

  if (!bar) return;

  if (State.compareList.length > 0) {
    bar.classList.add('active');
    if (countEl) countEl.innerText = `${State.compareList.length}/2 Pets Selected`;

    if (itemsContainer) {
      itemsContainer.innerHTML = State.compareList.map(id => {
        const item = PETIT_CATALOG.find(x => x.id === id);
        if (!item) return '';
        return `
          <div class="compare-pet-pill">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='assets/logo.jpeg'">
            <span>${item.name}</span>
            <button onclick="toggleCompare('${item.id}', event)" style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:0.9rem;">&times;</button>
          </div>
        `;
      }).join('');
    }
  } else {
    bar.classList.remove('active');
  }
}

function openCompareModal() {
  if (State.compareList.length === 0) return;

  const modal = document.getElementById('compareModal');
  const content = document.getElementById('compareModalContent');
  if (!modal || !content) return;

  const pet1 = PETIT_CATALOG.find(x => x.id === State.compareList[0]);
  const pet2 = State.compareList.length > 1 ? PETIT_CATALOG.find(x => x.id === State.compareList[1]) : null;

  content.innerHTML = `
    <div style="padding: 2rem;">
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <span class="section-badge"><i class="bi bi-arrow-left-right"></i> Side-by-Side Analysis</span>
        <h2 style="font-size: 1.8rem; margin: 0.5rem 0 0.3rem;">Companion Comparison</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Review key temperaments, diet, habitat needs, and adoption details.</p>
      </div>

      <div class="compare-modal-grid">
        <!-- Pet 1 -->
        <div class="compare-column">
          <img src="${pet1.image}" alt="${pet1.name}" style="width: 100%; height: 180px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1rem;" onerror="this.src='assets/logo.jpeg'">
          <h3 style="font-size: 1.4rem;">${pet1.name}</h3>
          <p style="color: var(--primary); font-weight: 700; margin-bottom: 1rem;">${pet1.breed} • ${pet1.age}</p>
          
          <div class="compare-spec-row">
            <span style="color: var(--text-muted);">Adoption Fee:</span>
            <strong>$${pet1.price}</strong>
          </div>
          <div class="compare-spec-row">
            <span style="color: var(--text-muted);">Habitat:</span>
            <strong>${pet1.habitat.toUpperCase()}</strong>
          </div>
          <div class="compare-spec-row">
            <span style="color: var(--text-muted);">Weight:</span>
            <strong>${pet1.weight}</strong>
          </div>
          <div class="compare-spec-row">
            <span style="color: var(--text-muted);">Vaccination:</span>
            <strong style="color: var(--secondary);">${pet1.vaccinated ? 'Certified 100%' : 'Standard'}</strong>
          </div>
          <div class="compare-spec-row">
            <span style="color: var(--text-muted);">Diet Plan:</span>
            <span style="font-size: 0.82rem; text-align: right; max-width: 160px;">${pet1.diet}</span>
          </div>
          <div style="margin-top: 1.5rem;">
            <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="closeModals(); openAdoptionModal('${pet1.id}');">
              Adopt ${pet1.name}
            </button>
          </div>
        </div>

        <!-- Pet 2 -->
        ${pet2 ? `
          <div class="compare-column">
            <img src="${pet2.image}" alt="${pet2.name}" style="width: 100%; height: 180px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1rem;" onerror="this.src='assets/logo.jpeg'">
            <h3 style="font-size: 1.4rem;">${pet2.name}</h3>
            <p style="color: var(--primary); font-weight: 700; margin-bottom: 1rem;">${pet2.breed} • ${pet2.age}</p>
            
            <div class="compare-spec-row">
              <span style="color: var(--text-muted);">Adoption Fee:</span>
              <strong>$${pet2.price}</strong>
            </div>
            <div class="compare-spec-row">
              <span style="color: var(--text-muted);">Habitat:</span>
              <strong>${pet2.habitat.toUpperCase()}</strong>
            </div>
            <div class="compare-spec-row">
              <span style="color: var(--text-muted);">Weight:</span>
              <strong>${pet2.weight}</strong>
            </div>
            <div class="compare-spec-row">
              <span style="color: var(--text-muted);">Vaccination:</span>
              <strong style="color: var(--secondary);">${pet2.vaccinated ? 'Certified 100%' : 'Standard'}</strong>
            </div>
            <div class="compare-spec-row">
              <span style="color: var(--text-muted);">Diet Plan:</span>
              <span style="font-size: 0.82rem; text-align: right; max-width: 160px;">${pet2.diet}</span>
            </div>
            <div style="margin-top: 1.5rem;">
              <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="closeModals(); openAdoptionModal('${pet2.id}');">
                Adopt ${pet2.name}
              </button>
            </div>
          </div>
        ` : `
          <div class="compare-column" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border-style: dashed;">
            <div style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 0.5rem;">➕</div>
            <h4>Select a 2nd Pet</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.3rem;">Click the compare icon on any other companion card to compare.</p>
          </div>
        `}
      </div>
    </div>
  `;

  modal.classList.add('active');
}

// --- 3-Step Ethical Adoption Verification & Certificate Flow ---
function openAdoptionModal(petId, event = null) {
  if (event) event.stopPropagation();

  const pet = PETIT_CATALOG.find(x => x.id === petId);
  if (!pet) return;

  State.currentAdoptionPet = pet;
  const modal = document.getElementById('adoptionModal');
  if (!modal) return;

  // Pre-fill
  const petNameEls = document.querySelectorAll('.adopt-pet-name');
  petNameEls.forEach(el => el.innerText = pet.name);
  
  const petBreedEls = document.querySelectorAll('.adopt-pet-breed');
  petBreedEls.forEach(el => el.innerText = `${pet.breed} • ${pet.age}`);

  const petImg = document.getElementById('adoptPetPreviewImg');
  if (petImg) petImg.src = pet.image;

  const feeEl = document.getElementById('adoptPetFee');
  if (feeEl) feeEl.innerText = `$${pet.price}`;

  if (State.user) {
    const parentNameInput = document.getElementById('adoptParentName');
    const parentEmailInput = document.getElementById('adoptParentEmail');
    if (parentNameInput) parentNameInput.value = State.user.name;
    if (parentEmailInput) parentEmailInput.value = State.user.email;
  }

  setAdoptionStep(1);
  modal.classList.add('active');
}

function setAdoptionStep(step) {
  document.querySelectorAll('.adoption-step-view').forEach(el => el.style.display = 'none');
  const target = document.getElementById(`adoptionStep${step}`);
  if (target) target.style.display = 'block';

  // Stepper UI
  document.querySelectorAll('.app-step-indicator .step-node').forEach((node, idx) => {
    node.classList.toggle('active', idx + 1 === step);
    node.classList.toggle('completed', idx + 1 < step);
  });
}

function processAdoptionStep1(e) {
  e.preventDefault();
  setAdoptionStep(2);
}

function processAdoptionFinal(e) {
  e.preventDefault();

  const pet = State.currentAdoptionPet;
  if (!pet) return;

  const parentName = document.getElementById('adoptParentName')?.value || (State.user ? State.user.name : 'Valued Pet Parent');
  const email = document.getElementById('adoptParentEmail')?.value || (State.user ? State.user.email : 'parent@example.com');
  const microchip = 'PETIT-' + Math.floor(10000000 + Math.random() * 90000000);
  const certId = 'CERT-' + Math.floor(100000 + Math.random() * 900000);
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Save Application
  const application = {
    id: certId,
    microchip: microchip,
    petId: pet.id,
    petName: pet.name,
    petBreed: pet.breed,
    petImage: pet.image,
    parentName: parentName,
    email: email,
    date: today,
    status: 'Approved & Verified'
  };

  State.applications.unshift(application);
  localStorage.setItem('petit_applications', JSON.stringify(State.applications));

  // Render Certificate
  const certContainer = document.getElementById('adoptionCertificateWrapper');
  if (certContainer) {
    certContainer.innerHTML = `
      <div id="printableCertificate" class="adoption-cert-card">
        <div class="cert-seal">🐾</div>
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary); font-weight: 800;">Official Certificate of Ethical Adoption</span>
        <h2 style="font-size: 2rem; margin: 0.4rem 0 0.8rem; font-family: var(--font-heading);">PET.IT Care Accreditation</h2>
        <p style="font-size: 0.95rem; line-height: 1.6; max-width: 480px; margin: 0 auto 1.5rem;">
          This certifies that <strong>${pet.name}</strong> (${pet.breed}) has been officially and ethically adopted by <strong>${parentName}</strong> into a loving forever home.
        </p>

        <div style="background: rgba(0,0,0,0.03); border-radius: var(--radius-md); padding: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; font-size: 0.85rem; text-align: left; max-width: 440px; margin: 0 auto 1.5rem; border: 1px solid rgba(0,0,0,0.08);">
          <div><strong style="color:var(--text-muted)">Microchip ID:</strong><br>${microchip}</div>
          <div><strong style="color:var(--text-muted)">Accreditation ID:</strong><br>${certId}</div>
          <div><strong style="color:var(--text-muted)">Health Guarantee:</strong><br>1-Year Complete</div>
          <div><strong style="color:var(--text-muted)">Handover Date:</strong><br>${today}</div>
        </div>

        <div style="display: flex; justify-content: space-around; align-items: flex-end; margin-top: 2rem; padding-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.15);">
          <div>
            <div style="font-family: 'Brush Script MT', cursive, sans-serif; font-size: 1.4rem; color: var(--primary);">Dr. Marcus Vance, DVM</div>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Chief Veterinary Officer</span>
          </div>
          <div>
            <div style="font-family: 'Brush Script MT', cursive, sans-serif; font-size: 1.4rem; color: var(--primary);">Irenimoyan S.</div>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Boutique Director</span>
          </div>
        </div>
      </div>
    `;
  }

  setAdoptionStep(3);
  triggerConfetti();
  showToast('Adoption Approved! 🐾', `Congratulations ${parentName}! Certificate generated.`, 'success');
}

function printCertificate() {
  window.print();
}

// --- Cart Engine & Slide-over Drawer ---
function addToCart(id, qty = 1, event = null) {
  if (event) event.stopPropagation();

  const item = PETIT_CATALOG.find(x => x.id === id);
  if (!item) return;

  const existingIndex = State.cart.findIndex(x => x.id === id);
  if (existingIndex > -1) {
    State.cart[existingIndex].qty += qty;
  } else {
    State.cart.push({
      id: item.id,
      name: item.name,
      breed: item.breed,
      price: item.price,
      image: item.image,
      type: item.type,
      qty: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast('Added to Cart 🐾', `${item.name} has been added to your cart!`, 'success');
}

function updateCartQty(id, delta) {
  const index = State.cart.findIndex(x => x.id === id);
  if (index > -1) {
    State.cart[index].qty += delta;
    if (State.cart[index].qty <= 0) {
      State.cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(id) {
  State.cart = State.cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
  showToast('Item Removed', 'Item removed from your cart.', 'info');
}

function saveCart() {
  localStorage.setItem('petit_cart', JSON.stringify(State.cart));
}

function updateCartUI() {
  const cartBadges = document.querySelectorAll('.cart-badge-count');
  const totalQty = State.cart.reduce((sum, item) => sum + item.qty, 0);
  
  cartBadges.forEach(badge => {
    badge.innerText = totalQty;
    badge.style.display = totalQty > 0 ? 'flex' : 'none';
  });

  const cartList = document.getElementById('cartDrawerList');
  const cartSubtotalEl = document.getElementById('cartDrawerSubtotal');
  const cartDiscountRow = document.getElementById('cartDrawerDiscountRow');
  const cartDiscountEl = document.getElementById('cartDrawerDiscount');
  const cartTaxEl = document.getElementById('cartDrawerTax');
  const cartTotalEl = document.getElementById('cartDrawerTotal');

  if (!cartList) return;

  if (State.cart.length === 0) {
    cartList.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3.5rem; margin-bottom: 1rem;">🛒</div>
        <h4>Your Cart is Empty</h4>
        <p style="font-size: 0.9rem; margin-top: 0.4rem;">Browse our adorable companions and luxury pet supplies.</p>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.innerText = '$0.00';
    if (cartTaxEl) cartTaxEl.innerText = '$0.00';
    if (cartTotalEl) cartTotalEl.innerText = '$0.00';
    return;
  }

  cartList.innerHTML = State.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='assets/logo.jpeg'">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-price">$${item.price} each</div>
        <div class="cart-qty-controls">
          <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span style="font-weight: 700; font-size: 0.88rem;">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="btn-icon" style="width: 32px; height: 32px; color: var(--accent-rose);" onclick="removeFromCart('${item.id}')" title="Remove">
        <i class="bi bi-trash3"></i>
      </button>
    </div>
  `).join('');

  const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountAmount = subtotal * (State.discountPercent / 100);
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const tax = taxableAmount * 0.08;
  const total = taxableAmount + tax;

  if (cartSubtotalEl) cartSubtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  if (cartDiscountRow) {
    cartDiscountRow.style.display = State.discountPercent > 0 ? 'flex' : 'none';
    if (cartDiscountEl) cartDiscountEl.innerText = `-$${discountAmount.toFixed(2)} (${State.discountPercent}%)`;
  }
  if (cartTaxEl) cartTaxEl.innerText = `$${tax.toFixed(2)}`;
  if (cartTotalEl) cartTotalEl.innerText = `$${total.toFixed(2)}`;
}

function toggleCartDrawer() {
  const drawerBackdrop = document.getElementById('cartDrawerBackdrop');
  if (drawerBackdrop) {
    drawerBackdrop.classList.toggle('active');
  }
}

function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'PETIT10') {
    State.discountPercent = 10;
    State.appliedPromoCode = 'PETIT10';
    showToast('Promo Code Applied 🎉', '10% discount applied to your order!', 'success');
  } else if (code === 'FREESHIP' || code === 'WELCOME20') {
    State.discountPercent = 20;
    State.appliedPromoCode = code;
    showToast('Promo Code Applied 🎉', '20% special discount applied!', 'success');
  } else {
    showToast('Invalid Code', 'Try PETIT10 or WELCOME20', 'error');
  }
  updateCartUI();
}

// --- Wishlist Management ---
function toggleWishlist(id, event = null) {
  if (event) event.stopPropagation();

  const index = State.wishlist.indexOf(id);
  const item = PETIT_CATALOG.find(x => x.id === id);

  if (index > -1) {
    State.wishlist.splice(index, 1);
    showToast('Removed from Wishlist', `${item ? item.name : 'Item'} removed from favorites`, 'info');
  } else {
    State.wishlist.push(id);
    showToast('Saved to Wishlist ❤️', `${item ? item.name : 'Item'} saved to your favorites!`, 'success');
  }

  localStorage.setItem('petit_wishlist', JSON.stringify(State.wishlist));
  updateWishlistUI();
  renderCatalog();
}

function updateWishlistUI() {
  const countEl = document.getElementById('wishlistCountBadge');
  if (countEl) {
    countEl.innerText = State.wishlist.length;
    countEl.style.display = State.wishlist.length > 0 ? 'flex' : 'none';
  }
}

// --- Multi-Step Checkout Modal ---
function openCheckoutModal() {
  if (State.cart.length === 0) {
    showToast('Cart is Empty', 'Please add some pets or supplies before checkout.', 'info');
    return;
  }
  toggleCartDrawer();

  const modal = document.getElementById('checkoutModal');
  if (!modal) return;

  const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountAmount = subtotal * (State.discountPercent / 100);
  const total = (subtotal - discountAmount) * 1.08;

  const checkoutTotalEl = document.getElementById('checkoutOrderTotal');
  if (checkoutTotalEl) {
    checkoutTotalEl.innerText = `$${total.toFixed(2)}`;
  }

  if (State.user) {
    const nameInput = document.getElementById('checkoutName');
    const emailInput = document.getElementById('checkoutEmail');
    if (nameInput) nameInput.value = State.user.name;
    if (emailInput) emailInput.value = State.user.email;
  }

  setCheckoutStep(1);
  modal.classList.add('active');
}

function setCheckoutStep(step) {
  document.querySelectorAll('.checkout-step-content').forEach(el => el.style.display = 'none');
  const targetStep = document.getElementById(`checkoutStep${step}`);
  if (targetStep) targetStep.style.display = 'block';
}

function processCheckoutOrder(e) {
  e.preventDefault();

  const name = document.getElementById('checkoutName')?.value || 'Valued Pet Parent';
  const orderId = 'PETIT-' + Math.floor(100000 + Math.random() * 900000);

  State.cart = [];
  saveCart();
  updateCartUI();

  const successNameEl = document.getElementById('orderSuccessName');
  const orderIdEl = document.getElementById('orderSuccessId');
  if (successNameEl) successNameEl.innerText = name;
  if (orderIdEl) orderIdEl.innerText = orderId;

  setCheckoutStep(3);
  triggerConfetti();
  showToast('Order Confirmed! 🐾', `Congratulations! Reference ${orderId}`, 'success');
}

// --- Pet Parent Profile Dashboard Modal ---
function openProfileModal() {
  const modal = document.getElementById('profileModal');
  const content = document.getElementById('profileModalContent');
  if (!modal || !content) return;

  const user = State.user || { name: 'Sarah Jenkins', email: 'sarah.jenkins@example.com' };
  const initials = user.name.split(' ').map(n => n[0]).join('').substring(0, 2);

  const applicationsList = State.applications.length > 0 ? State.applications : [
    {
      id: 'CERT-892144',
      petName: 'Sir Winston',
      petBreed: 'Pembroke Welsh Corgi',
      date: 'Aug 10, 2026',
      status: 'Handover Completed 🐾'
    }
  ];

  content.innerHTML = `
    <div style="padding: 2rem;">
      <div class="profile-header-card">
        <div class="profile-avatar-circle">${initials}</div>
        <div>
          <span style="font-size: 0.75rem; background: rgba(245, 158, 11, 0.25); color: #f59e0b; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); font-weight: 700;">
            <i class="bi bi-patch-check-fill"></i> Gold Tier Pet Parent
          </span>
          <h2 style="font-size: 1.6rem; color: #fff; margin: 0.4rem 0 0.2rem;">${user.name}</h2>
          <p style="color: #94a3b8; font-size: 0.88rem;">${user.email}</p>
        </div>
      </div>

      <div class="profile-stats-grid">
        <div class="profile-stat-box">
          <span style="font-size: 1.5rem; font-weight: 800; color: var(--primary); display: block;">${applicationsList.length}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Adoptions</span>
        </div>
        <div class="profile-stat-box">
          <span style="font-size: 1.5rem; font-weight: 800; color: var(--secondary); display: block;">${State.wishlist.length}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Saved Pets</span>
        </div>
        <div class="profile-stat-box">
          <span style="font-size: 1.5rem; font-weight: 800; color: var(--accent-rose); display: block;">100%</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Health Shield</span>
        </div>
      </div>

      <h4 style="font-size: 1.1rem; margin-bottom: 0.8rem;"><i class="bi bi-file-earmark-medical-fill" style="color: var(--primary);"></i> Active Adoption Applications</h4>
      <div style="margin-bottom: 2rem;">
        ${applicationsList.map(app => `
          <div class="application-tracker-item">
            <div>
              <strong style="font-size: 0.95rem; display: block;">${app.petName} (${app.petBreed})</strong>
              <span style="font-size: 0.78rem; color: var(--text-muted);">Ref: ${app.id} • ${app.date}</span>
            </div>
            <span style="font-size: 0.75rem; background: var(--secondary-light); color: var(--secondary); padding: 0.3rem 0.7rem; border-radius: var(--radius-full); font-weight: 700;">
              ${app.status}
            </span>
          </div>
        `).join('')}
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 1.2rem;">
        <button class="btn btn-secondary btn-sm" onclick="logoutUser()">
          <i class="bi bi-box-arrow-right"></i> Sign Out
        </button>
        <button class="btn btn-primary btn-sm" onclick="closeModals()">
          Close Dashboard
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function logoutUser() {
  localStorage.removeItem('petit_user');
  State.user = null;
  initAuthUI();
  closeModals();
  showToast('Logged Out', 'You have been safely signed out.', 'info');
}

// --- Interactive Pet Match Quiz Engine ---
function answerQuiz(optionKey, questionIndex) {
  State.quizAnswers[questionIndex] = optionKey;

  const container = document.getElementById(`quizQuestion${questionIndex}`);
  if (container) {
    container.querySelectorAll('.quiz-option-card').forEach(card => {
      card.classList.toggle('selected', card.dataset.value === optionKey);
    });
  }

  setTimeout(() => {
    if (questionIndex < 3) {
      document.getElementById(`quizQuestion${questionIndex}`).style.display = 'none';
      document.getElementById(`quizQuestion${questionIndex + 1}`).style.display = 'block';
      const progressFill = document.getElementById('quizProgressFill');
      if (progressFill) progressFill.style.width = `${((questionIndex + 1) / 3) * 100}%`;
    } else {
      calculateQuizResult();
    }
  }, 350);
}

function calculateQuizResult() {
  document.getElementById('quizQuestion3').style.display = 'none';
  const resultContainer = document.getElementById('quizResultContainer');
  if (!resultContainer) return;

  let matchedPet = PETIT_CATALOG[0]; // Default Corgi
  const living = State.quizAnswers[1]; // apartment, house, farm
  const energy = State.quizAnswers[2]; // relaxed, moderate, high

  if (living === 'apartment' && energy === 'relaxed') {
    matchedPet = PETIT_CATALOG.find(p => p.name.includes('Duchess Luna')) || PETIT_CATALOG[1];
  } else if (living === 'apartment' && energy === 'moderate') {
    matchedPet = PETIT_CATALOG.find(p => p.name.includes('Sir Winston')) || PETIT_CATALOG[0];
  } else if (living === 'house' && energy === 'high') {
    matchedPet = PETIT_CATALOG.find(p => p.name.includes('Zeus')) || PETIT_CATALOG[6];
  } else if (living === 'country') {
    matchedPet = PETIT_CATALOG.find(p => p.name.includes('Apollo')) || PETIT_CATALOG[13];
  } else if (energy === 'relaxed') {
    matchedPet = PETIT_CATALOG.find(p => p.name.includes('Snowflake')) || PETIT_CATALOG[2];
  }

  resultContainer.style.display = 'block';
  resultContainer.innerHTML = `
    <div style="text-align: center; padding: 2rem 1rem;">
      <span class="section-badge"><i class="bi bi-stars"></i> 99% Perfect Match Found!</span>
      <h2 style="font-size: 2.2rem; margin: 1rem 0 0.5rem;">Meet ${matchedPet.name}!</h2>
      <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 2rem;">Based on your home habitat and daily lifestyle rhythm, here is your certified ideal match:</p>

      <div style="max-width: 380px; margin: 0 auto 2rem; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); background: var(--bg-card); border: 1px solid var(--border-color);">
        <img src="${matchedPet.image}" alt="${matchedPet.name}" style="width: 100%; height: 240px; object-fit: cover;" onerror="this.src='assets/logo.jpeg'">
        <div style="padding: 1.5rem; text-align: left;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <h3 style="font-size: 1.3rem;">${matchedPet.name}</h3>
            <span style="font-weight: 800; color: var(--primary); font-size: 1.2rem;">$${matchedPet.price}</span>
          </div>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1rem;">${matchedPet.breed} • ${matchedPet.age}</p>
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
            ${matchedPet.temperament.map(t => `<span class="pet-tag-pill">${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <button class="btn btn-primary btn-lg" onclick="openAdoptionModal('${matchedPet.id}')">
          <i class="bi bi-heart-half"></i> Apply to Adopt ${matchedPet.name}
        </button>
        <button class="btn btn-secondary btn-lg" onclick="resetQuiz()">
          <i class="bi bi-arrow-clockwise"></i> Retake Quiz
        </button>
      </div>
    </div>
  `;
}

function resetQuiz() {
  State.quizAnswers = {};
  document.getElementById('quizResultContainer').style.display = 'none';
  document.getElementById('quizQuestion1').style.display = 'block';
  document.getElementById('quizQuestion2').style.display = 'none';
  document.getElementById('quizQuestion3').style.display = 'none';
  const progressFill = document.getElementById('quizProgressFill');
  if (progressFill) progressFill.style.width = '33%';
}

// --- Service Booking Modal ---
function openBookingModal(serviceName) {
  const modal = document.getElementById('bookingModal');
  const serviceInput = document.getElementById('bookingServiceName');
  if (!modal) return;

  if (serviceInput) serviceInput.value = serviceName || 'Luxury Pet Grooming Spa';
  modal.classList.add('active');
}

function processBooking(e) {
  e.preventDefault();
  closeModals();
  showToast('Booking Received! 🛁', 'Our care coordinator will contact you shortly to confirm your appointment.', 'success');
}

// --- Toast Notification Engine ---
function showToast(title, message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'bi-info-circle-fill';
  if (type === 'success') icon = 'bi-check-circle-fill';
  if (type === 'error') icon = 'bi-exclamation-triangle-fill';

  toast.innerHTML = `
    <i class="bi ${icon}" style="font-size: 1.3rem; color: var(--primary);"></i>
    <div>
      <div style="font-weight: 700; font-size: 0.92rem;">${title}</div>
      <div style="font-size: 0.82rem; color: var(--text-secondary);">${message}</div>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// --- Confetti Celebration ---
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#f59e0b', '#10b981', '#f43f5e', '#3b82f6', '#8b5cf6'];

  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.7) * 18,
      size: Math.random() * 9 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12
    });
  }

  let frame = 0;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.4;
      p.rotation += p.rotationSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    frame++;
    if (frame < 180) {
      requestAnimationFrame(update);
    } else {
      canvas.remove();
    }
  }
  update();
}

// --- Intersection Observer for Scroll Animations ---
function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// --- Event Listeners Setup ---
function initEventListeners() {
  // Category Pills Filter
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      State.activeCategory = pill.dataset.category;
      renderCatalog();
    });
  });

  // Habitat Filter Chips
  document.querySelectorAll('.habitat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.habitat-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      State.activeHabitat = chip.dataset.habitat;
      renderCatalog();
    });
  });

  // Search Inputs
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      State.searchQuery = e.target.value;
      renderCatalog();
    });
  }

  const navSearchInput = document.getElementById('navSearchInput');
  if (navSearchInput) {
    navSearchInput.addEventListener('input', (e) => {
      State.searchQuery = e.target.value;
      const catalogSection = document.getElementById('catalog');
      if (catalogSection) catalogSection.scrollIntoView({ behavior: 'smooth' });
      renderCatalog();
    });
  }

  // Sort Select
  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      State.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Sticky Navbar Blur On Scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.header-nav');
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }
  });

  // Close modals on clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModals();
    });
  });
}

function closeModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => modal.classList.remove('active'));
}
