
let gamesData = {
    'gta5': {
        title: 'GTA V',
        img: 'assets/images/gta5.jpg',
        description: 'Grand Theft Auto V is a 2013 action-adventure game set in the fictional state of San Andreas, based on Southern California. The single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. Players freely roam the open world countryside and the city of Los Santos, based on Los Angeles.',
        trailerId: 'QkkoHAzjnUs',
        systemReq: {
            min: 'OS: Windows 10 64 Bit | Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz | Memory: 4 GB RAM | Graphics: NVIDIA 9800 GT 1GB | Storage: 72 GB',
            rec: 'OS: Windows 10 64 Bit | Processor: Intel Core i5 3470 @ 3.2GHz | Memory: 8 GB RAM | Graphics: NVIDIA GTX 660 2GB | Storage: 72 GB'
        },

        prices: { steam: 14.99, other: 14.99, otherName: 'Epic Store' },
        
        buyLinks: [
            { name: 'Steam', url: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/' },
            { name: 'Epic Store', url: 'https://store.epicgames.com/en-US/p/grand-theft-auto-v' }
        ],
        relatedGames: ['rdr2', 'cyberpunk'],
        screenshots: [
            'http://media.rockstargames.com/rockstargames/img/global/news/upload/12_gtavpc_03272015.jpg',
            'http://media.rockstargames.com/rockstargames/img/global/news/upload/3_gtavpc_03272015.jpg',
            'http://media.rockstargames.com/rockstargames/img/global/news/upload/13_gtavpc_03272015.jpg'
        ],
        reviews: [
            { user: 'GamerPro', rating: 5, comment: 'Epic open world, endless fun!' },
            { user: 'SpeedDemon', rating: 4, comment: 'Story is gripping, multiplayer is addictive.' },
            { user: 'CityExplorer', rating: 5, comment: 'Best GTA ever, graphics still hold up.' },
            { user: 'HeistMaster', rating: 4.5, comment: 'Heists are thrilling, but some missions repetitive.' }
        ]
    },
    'rdr2': {
        title: 'Red Dead Redemption 2',
        img: 'assets/images/rdr2.jpg',
        description: 'Red Dead Redemption 2 is a 2018 action-adventure game set in a fictionalized representation of the United States in 1899. It follows the exploits of outlaw Arthur Morgan, a member of the Van der Linde gang, as they deal with the decline of the Wild West while attempting to survive against government forces, rival gangs, and other adversaries.',
        trailerId: 'gmA-QtBxGQY',
        systemReq: {
            min: 'OS: Windows 10 | Processor: Intel Core i5-2500K | Memory: 8 GB RAM | Graphics: Nvidia GeForce GTX 770 2GB | Storage: 150 GB',
            rec: 'OS: Windows 10 | Processor: Intel Core i7-4770K | Memory: 12 GB RAM | Graphics: Nvidia GeForce GTX 1060 6GB | Storage: 150 GB'
        },

        prices: { steam: 59.99, other: 19.79, otherName: 'Epic Store' },
        buyLinks: [
            { name: 'Steam', url: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/' },
            { name: 'Epic Store', url: 'https://store.epicgames.com/en-US/p/red-dead-redemption-2' }
        ],
        relatedGames: ['gta5', 'elden'],
        screenshots: [
            'https://media.rockstargames.com/rockstargames-newsite/uploads/4bf52a5de2b369a35c07ce094e2377c72edf9acd.jpg',
            'https://media.rockstargames.com/rockstargames-newsite/uploads/9df604862c92e955568dd936bab3e60acb906b2d.jpg',
            'https://media.rockstargames.com/rockstargames-newsite/uploads/75be63868c08f8d5d4de3233570657efcc3a41d4.jpg'
        ],
        reviews: [
            { user: 'WesternFan', rating: 5, comment: 'Masterpiece storytelling and world-building.' },
            { user: 'OutlawLife', rating: 5, comment: 'Stunning visuals, immersive gameplay.' },
            { user: 'CowboyGamer', rating: 4.5, comment: 'Emotional journey, but pacing can be slow.' },
            { user: 'RedemptionSeeker', rating: 5, comment: 'Best open-world game ever made.' }
        ]
    },
    'forza': {
        title: 'Forza Horizon 5',
        img: 'assets/images/forza.jpg',
        description: 'Forza Horizon 5 is a 2021 racing video game set in an open world environment based in a fictional representation of Mexico. The game has the largest map in the entire Forza Horizon series, being 50% larger than its predecessor. It features a vast array of cars and racing events in diverse biomes.',
        trailerId: 'FYH9n37B7Yw',
        systemReq: {
            min: 'OS: Windows 10 | Processor: Intel i5-4460 | Memory: 8 GB RAM | Graphics: NVidia GTX 970 | Storage: 110 GB',
            rec: 'OS: Windows 10 | Processor: Intel i5-8400 | Memory: 16 GB RAM | Graphics: NVidia GTX 1070 | Storage: 110 GB'
        },
        prices: { steam: 59.99, other: 59.99, otherName: 'MS Store' },
        buyLinks: [
            { name: 'Steam', url: 'https://store.steampowered.com/app/1551360/Forza_Horizon_5/' },
            { name: 'Microsoft Store', url: 'https://www.microsoft.com/en-us/p/forza-horizon-5/9p5x27v0c8vw' }
        ],
        relatedGames: ['gow', 'hogwarts'],
        screenshots: [
            'https://assets-prd.ignimgs.com/2021/07/26/forza-1627326335295.png',
            'https://www.newgamenetwork.com/app/uploads/2025/10/fh5_02_3.jpg',
            'https://i.redd.it/8zkbgx8bd3571.jpg'
        ],
        reviews: [
            { user: 'RacerX', rating: 5, comment: 'Insane graphics and car handling.' },
            { user: 'SpeedKing', rating: 4.5, comment: 'Endless races, beautiful Mexico setting.' },
            { user: 'DriftMaster', rating: 5, comment: 'Best racing game on console.' },
            { user: 'HorizonFan', rating: 4, comment: 'Fun multiplayer, but some bugs.' }
        ]
    },
    'hogwarts': {
        title: 'Hogwarts Legacy',
        img: 'assets/images/hogwarts.jpg',
        description: 'Hogwarts Legacy is an open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be.',
        trailerId: '1O6Qstncpnc',
        systemReq: {
            min: 'OS: Windows 10 64-bit | Processor: Intel Core i5-6600 | Memory: 16 GB RAM | Graphics: NVIDIA GeForce GTX 960 4GB | Storage: 85 GB',
            rec: 'OS: Windows 10 64-bit | Processor: Intel Core i7-8700 | Memory: 16 GB RAM | Graphics: NVIDIA GeForce RTX 2080 Ti | Storage: 85 GB'
        },
        prices: { steam: 59.99, other: 23.99, otherName: 'Epic Store' },
        buyLinks: [
            { name: 'Steam', url: 'https://store.steampowered.com/app/990080/Hogwarts_Legacy/' },
            { name: 'Epic Store', url: 'https://store.epicgames.com/en-US/p/hogwarts-legacy' }
        ],
        relatedGames: ['elden', 'cyberpunk'],
        screenshots: [
            'https://i.redd.it/q3fy783hlkn51.jpg',
            'https://images.pushsquare.com/5c513014bf471/hogwarts-legacy-ps5-playstation-5-1.large.jpg',
            'https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-09.jpg'
        ],
        reviews: [
            { user: 'WizardFan', rating: 5, comment: 'Magical world comes to life!' },
            { user: 'PotterHead', rating: 4.5, comment: 'Great exploration, spells are fun.' },
            { user: 'HogwartsStudent', rating: 5, comment: 'Dream come true for HP fans.' },
            { user: 'SpellCaster', rating: 4, comment: 'Story engaging, but some repetitive quests.' }
        ]
    },
    'cyberpunk': {
        title: 'Cyberpunk 2077',
        img: 'assets/images/cyberpunk.jpg',
        description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.',
        trailerId: '8X2kIfS6fb8',
        systemReq: {
            min: 'OS: Windows 10 | Processor: Intel Core i5-3570K | Memory: 8 GB RAM | Graphics: NVIDIA GeForce GTX 780 3GB | Storage: 70 GB',
            rec: 'OS: Windows 10 | Processor: Intel Core i7-4790 | Memory: 16 GB RAM | Graphics: NVIDIA GeForce RTX 2060 6GB | Storage: 70 GB'
        },
        prices: { steam: 29.99, other: 29.99, otherName: 'GOG' },
        buyLinks: [
            { name: 'Steam', url: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/' },
            { name: 'GOG', url: 'https://www.gog.com/game/cyberpunk_2077' }
        ],
        relatedGames: ['gta5', 'forza'],
        screenshots: [
            'https://cdn.wccftech.com/wp-content/uploads/2020/06/Cyberpunk-2077-Jun-25th-Screenshots-9.jpg',
            'https://images.nvidia.com/aem-dam/en-zz/Solutions/geforce/news/cyberpunk-2077-ray-tracing-overdrive-digital-artist-screenshots/digital-dreams-cyberpunk-2077-overdrive-screenshot-002.jpg',
            'https://gameinformer.com/sites/default/files/styles/no_compression/public/2019/06/11/c26b86c7/cyberpunk2077-just_in_time_for_dinner-rgb-en.jpeg.webp'
        ],
        reviews: [
            { user: 'NightCityMerc', rating: 4.5, comment: 'Futuristic vibe is unmatched.' },
            { user: 'CyberFan', rating: 5, comment: 'Deep story, amazing world.' },
            { user: 'NetRunner', rating: 4, comment: 'Improved a lot post-launch.' },
            { user: 'StreetSamurai', rating: 5, comment: 'RPG elements are top-notch.' }
        ]
    },
    'gow': {
        title: 'God of War Ragnarök',
        img: 'assets/images/gow.jpg',
        description: 'God of War Ragnarök is an action-adventure game where Kratos and Atreus embark on a mythic journey across the Nine Realms as Ragnarök approaches.',
        trailerId: 'hh5HV4iic1Y',
        systemReq: {
            min: 'OS: Windows 10 64-bit | Processor: Intel i5-2500k | Memory: 8 GB RAM | Graphics: NVIDIA GTX 960 | Storage: 190 GB',
            rec: 'OS: Windows 10 64-bit | Processor: Intel i5-6600k | Memory: 16 GB RAM | Graphics: NVIDIA RTX 3060 | Storage: 190 GB'
        },
        prices: { steam: 59.99, other: 59.99, otherName: 'PS Store' },
        buyLinks: [
            { name: 'Steam', url: 'https://store.steampowered.com/app/2322010/God_of_War_Ragnark/' },
            { name: 'PlayStation Store', url: 'https://store.playstation.com/en-us/product/UP9000-PPSA07411_00-GODOFWARRAGNAROK' }
        ],
        relatedGames: ['elden', 'hogwarts'],
        screenshots: [
            'https://gagadget.com/media/uploads/godiik.png',
            'https://cdn.mos.cms.futurecdn.net/dT5jaPwCSERSNFrrhmtwyb.jpg',
            'https://cdn.mos.cms.futurecdn.net/Rgvoh6dyCGcBgNVhvZtf3R.jpg'
        ],
        reviews: [
            { user: 'GodSlayer', rating: 5, comment: 'Epic Norse saga conclusion.' },
            { user: 'KratosFan', rating: 5, comment: 'Emotional and action-packed.' },
            { user: 'RealmWalker', rating: 4.5, comment: 'Combat is brutal and fun.' },
            { user: 'MythicHero', rating: 5, comment: 'Best in the series.' }
        ]
    },
    'elden': {
        title: 'Elden Ring',
        img: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg',
        description: 'Elden Ring is an action RPG which takes place in the Lands Between, sometime after the Shattering of the titular Elden Ring.',
        trailerId: 'E3Huy2cdih0',
        systemReq: {
            min: 'OS: Windows 10 | Processor: Intel Core i5-8400 | Memory: 12 GB RAM | Graphics: NVIDIA GeForce GTX 1060 3 GB | Storage: 60 GB',
            rec: 'OS: Windows 10/11 | Processor: Intel Core i7-8700K | Memory: 16 GB RAM | Graphics: NVIDIA GeForce GTX 1070 8 GB | Storage: 60 GB'
        },
        prices: { steam: 59.99, other: 59.99, otherName: 'Bandai Namco' },
        buyLinks: [
            { name: 'Steam', url: 'https://store.steampowered.com/app/1245620/ELDEN_RING/' },
            { name: 'Bandai Namco Store', url: 'https://store.bandainamcoent.eu/eu/product/elden-ring' }
        ],
        relatedGames: ['gow', 'rdr2'],
        screenshots: [
            'https://preview.redd.it/my-favorite-elden-ring-screenshot-v0-6tfcf335bu2d1.jpeg?width=1080&crop=smart&auto=webp&s=cce9ac3cf1e37ee8afc3798e67cbc7f7fbb20ab5',
            'https://www.dsogaming.com/wp-content/uploads/2021/08/Elden-Ring-new-screenshots-1.jpg',
            'https://cdn.mos.cms.futurecdn.net/Rgvoh6dyCGcBgNVhvZtf3R.jpg'
        ],
        reviews: [
            { user: 'TarnishedOne', rating: 5, comment: 'Challenging and rewarding.' },
            { user: 'RingBearer', rating: 4.5, comment: 'Vast world to explore.' },
            { user: 'BossHunter', rating: 5, comment: 'FromSoftware at its best.' },
            { user: 'EldenLord', rating: 4, comment: 'Steep learning curve, but worth it.' }
        ]
    }
};

// --- CORE UTILITIES ---
function getWishlist() {
    const wl = localStorage.getItem('wishlist');
    return wl ? JSON.parse(wl) : [];
}

function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.className = "toast-notification show"; // CSS animation trigger
        setTimeout(() => { toast.className = "toast-notification"; }, 3000);
    }
}

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        const cart = getCart();
        countEl.textContent = cart.length;
        countEl.style.display = cart.length > 0 ? 'block' : 'none';
    }
}

// --- NAVIGATION & UI ---
function updateUserSection() {
    const section = document.getElementById('user-section');
    if (!section) return;

    // Navbar ke saare links pakdo
    const navLinks = document.querySelectorAll('nav a');
    const username = localStorage.getItem('username');

    if (username) {
        // --- LOGGED IN STATE ---
        section.innerHTML = `
            Hey, ${username}! 
            <button onclick="logout()" style="margin-left:12px; background:none; border:none; color:inherit; cursor:pointer; font-weight:500;">Logout</button>
            <a href="cart.html" style="margin-left:20px; position:relative; text-decoration:none; color:inherit; font-size:1.4rem;">
                🛒 <span id="cart-count" style="position:absolute; top:-8px; right:-12px; background:#e91e63; color:white; font-size:0.7rem; padding:2px 6px; border-radius:50%; min-width:16px; text-align:center;">0</span>
            </a>
        `;
        
        // Saare links dikhao
        navLinks.forEach(link => link.style.display = 'inline-block');
        updateCartCount();
    } else {
        // --- LOGGED OUT STATE ---
        section.innerHTML = `<a href="login.html" style="text-decoration:none; color:inherit; font-weight:500;">Login</a>`;
        
        // Specific links hide karo
        navLinks.forEach(link => {
            const text = link.textContent.toLowerCase().trim();
            if (text === 'demo' || text === 'wishlist') {
                link.style.display = 'none';
            }
        });
    }
}

function logout() {
    localStorage.removeItem('username');
    location.href = 'index.html';
}

// --- GAME LOGIC ---
function addToCart(gameId) {
    let cart = getCart();
    if (!cart.includes(gameId)) {
        cart.push(gameId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showToast('🚀 Added to your gaming vault!');
    } else {
        showToast('Already in your cart, champion!');
    }
}

function toggleWishlist(gameId) {
    const username = localStorage.getItem('username');
    if (!username) {
        alert('Please login to wishlist games');
        window.location.href = 'login.html';
        return;
    }
    let wishlist = getWishlist();
    let action = wishlist.includes(gameId) ? 'removed' : 'added';
    if (wishlist.includes(gameId)) {
        wishlist = wishlist.filter(id => id !== gameId);
    } else {
        wishlist.push(gameId);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistButtons();
    updateWishlistPage();
    showToast(`Game ${action} from wishlist!`);
}

function updateWishlistButtons() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const gameId = btn.getAttribute('data-game');
        if (getWishlist().includes(gameId)) {
            btn.textContent = '❤';
            btn.classList.add('wishlisted');
        } else {
            btn.textContent = '♡';
            btn.classList.remove('wishlisted');
        }
    });
}

// --- PAGE UPDATERS ---
function updateWishlistPage() {
    const grid = document.getElementById('wishlist-grid');
    const countEl = document.getElementById('wishlist-count');
    if (!grid) return;

    let wishlist = getWishlist();
    const sort = document.getElementById('sort-select')?.value || 'default';

    // Sorting Logic
    if (sort === 'alpha') {
        wishlist.sort((a, b) => (gamesData[a]?.title || "").localeCompare(gamesData[b]?.title || ""));
    }

    if (countEl) countEl.textContent = `Vault Items (${wishlist.length})`;

    if (wishlist.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding: 100px 0;">
                <p style="font-size: 1.4rem; opacity: 0.6; margin-bottom: 30px;">Your gaming vault is empty.</p>
                <a href="games.html" class="btn primary">Discover AAA Titles</a>
            </div>`;
        return;
    }

    grid.innerHTML = wishlist.map(id => {
        const game = gamesData[id];
        if (!game) return '';
        return `
            <div class="game-card reveal">
                <div style="position:relative; overflow:hidden;">
                    <img src="${game.img}" alt="${game.title}" style="width:100%; height:200px; object-fit:cover;">
                    <button class="remove-btn" data-game="${id}" style="position:absolute; top:15px; right:15px; background:rgba(255, 82, 82, 0.9); border:none; width:35px; height:35px; border-radius:50%; color:white; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:0.3s;">🗑️</button>
                </div>
                <div class="game-info" style="padding: 25px; opacity:1; position:static; background:transparent;">
                    <h3 style="margin-bottom:10px; font-size:1.4rem;">${game.title}</h3>
                    <p style="font-size:0.9rem; opacity:0.7; margin-bottom:20px; min-height:40px;">${game.description.substring(0, 70)}...</p>
                    <div style="display:flex; gap:15px;">
                        <a href="demo.html" class="card-btn" style="flex:1; text-align:center; background:#0071e3; color:white;">Play Demo</a>
                        <button class="buy-btn" data-game="${id}" style="flex:1; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:white; border-radius:20px; cursor:pointer;">Add to Cart</button>
                    </div>
                </div>
            </div>`;
    }).join('');

    // Re-attach delete listeners
    grid.querySelectorAll('.remove-btn').forEach(btn => {
        btn.onclick = () => toggleWishlist(btn.dataset.game);
    });
}

// --- STEP 2: SMART CART REBUILD ---
function renderCart() {
    const listDiv = document.getElementById('cart-items-list'); // Nayi ID use kar rahe hain
    const subtotalEl = document.getElementById('subtotal-val');
    const totalEl = document.getElementById('total-val');
    const wrapper = document.getElementById('cart-wrapper');
    const emptyMsg = document.getElementById('empty-cart-msg');
    

    if (!listDiv) return;

    const cart = getCart();
    const specs = JSON.parse(localStorage.getItem('userSpecs') || '{}');
    let total = 0;

    if (cart.length === 0) {
        if (wrapper) wrapper.style.display = 'none';
        if (emptyMsg) emptyMsg.style.display = 'block';
        return;
    }

    if (wrapper) wrapper.style.display = 'grid';
    if (emptyMsg) emptyMsg.style.display = 'none';

    listDiv.innerHTML = cart.map(id => {
        const game = gamesData[id];
        if (!game) return '';
        
        const prices = game.prices || { steam: 59.99, other: 59.99, otherName: 'Store' };
        const bestPrice = Math.min(prices.steam, prices.other);
        total += bestPrice;
        
        const isSteamCheaper = prices.steam <= prices.other;
        const steamLink = game.buyLinks?.find(l => l.name === 'Steam')?.url || '#';
        const otherLink = game.buyLinks?.find(l => l.name === prices.otherName)?.url || '#';

        return `
            <div class="cart-card" style="background:rgba(255,255,255,0.02); padding:20px; border-radius:15px; margin-bottom:20px; border:1px solid rgba(255,255,255,0.05);">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:15px;">
                    <div style="display:flex; gap:15px; align-items:center;">
                        <img src="${game.img}" style="width:80px; height:50px; border-radius:8px; object-fit:cover;">
                        <div>
                            <h3 style="margin:0; font-size:1.1rem;">${game.title}</h3>
                            <span style="color:#00ff88; font-weight:bold; font-size:0.9rem;">Best Price: $${bestPrice.toFixed(2)}</span>
                        </div>
                    </div>
                    
                    <button onclick="removeItem('${id}')" style="background:rgba(255,48,79,0.1); border:1px solid rgba(255,48,79,0.2); color:#ff304f; cursor:pointer; font-weight:700; font-size:0.7rem; padding:5px 10px; border-radius:6px; text-transform:uppercase;">
                        Remove
                    </button>
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <a href="${steamLink}" class="store-link" target="_blank">Get on Steam ($${prices.steam.toFixed(2)})</a>
                    <a href="${otherLink}" class="store-link" target="_blank">Get on ${prices.otherName} ($${prices.other.toFixed(2)})</a>
                </div>
            </div>`;
    }).join('');

    if (subtotalEl) subtotalEl.textContent = `$${total.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

// --- FIX FOR DETAIL PAGE ADD TO CART ---
function setupCartButton(gameId) {
    const cartBtn = document.getElementById('main-cart-btn');
    if (cartBtn) {
        cartBtn.onclick = () => {
            // Hum direct addToCart call kar rahe hain jo storage sambhal lega
            addToCart(gameId); 
            // Aur yahan message trigger kar rahe hain
            showToast('🚀 Added to Cart Terminal!');
        };
    }
}



// Global functions for new cart
window.removeItem = (id) => {
    let cart = getCart().filter(gid => gid !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
    showToast('Vault updated.');
};

window.authorizePurchase = () => {
    showToast('Authenticating Transaction...');
    setTimeout(() => { alert('Purchase Authorized! Welcome to the Next Gen.'); }, 1000);
};


// --- MAIN INIT ---
document.addEventListener('DOMContentLoaded', () => {
    updateUserSection();
    updateWishlistButtons();
    renderCart();
    updateWishlistPage();

    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('game');
    const detailContainer = document.getElementById('game-detail');
    // user.js mein DOMContentLoaded function ke andar:
    const wishBtn = document.getElementById('detail-wishlist-btn');
    if (wishBtn && gameId) {
    updateDetailWishlistButton(gameId); // Ise call karna zaroori hai
    }
    

    if (gameId && detailContainer) {
        const game = gamesData[gameId];
        if (game) {
            // Force visibility for sections
            document.querySelectorAll('.section').forEach(sec => sec.style.opacity = "1");

            document.getElementById('game-title').textContent = game.title;
            document.getElementById('game-description').textContent = game.description;
            const heroImg = document.getElementById('game-hero-img');
            if (heroImg) heroImg.src = game.img;

            // TRAILER - Clean link for file:/// users
            const trailerFrame = document.getElementById('trailer-frame');
            if (trailerFrame) {
                // Remove complex origin parameters to fix Error 153 on local files
                trailerFrame.src = `https://www.youtube.com/embed/${game.trailerId}?autoplay=1&mute=1&rel=0&modestbranding=1`;
            }

            // SYSTEM REQUIREMENTS
            const reqTable = document.querySelector('#system-req-table tbody');
            if (reqTable) {
                reqTable.innerHTML = `<tr>
                    <td style="background:rgba(255,255,255,0.05); padding:20px;"><strong>MINIMUM</strong><br>${game.systemReq.min}</td>
                    <td style="background:rgba(0,212,255,0.05); padding:20px;"><strong>RECOMMENDED</strong><br>${game.systemReq.rec}</td>
                </tr>`;
            }

            // BUY LINKS (The Steam/Epic Buttons you missed)
            const buyLinksDiv = document.getElementById('buy-links');
            if (buyLinksDiv) {
                buyLinksDiv.innerHTML = game.buyLinks.map(link => `
                    <a href="${link.url}" class="buy-btn" target="_blank" style="margin-right:10px;">${link.name}</a>
                `).join('');
            }

            // SCREENSHOTS
            const ssDiv = document.getElementById('screenshots');
            if (ssDiv) {
                ssDiv.innerHTML = game.screenshots.map(url => `<img src="${url}" class="screenshot" style="width:100%; border-radius:12px; margin-bottom:10px;">`).join('');
            }

            // REVIEWS (Wapas add kiya)
            const reviewsDiv = document.getElementById('reviews');
            if (reviewsDiv) {
                reviewsDiv.innerHTML = game.reviews.map(r => `
                    <div class="review" style="background:var(--card); padding:20px; border-radius:12px; margin-bottom:15px; opacity:1; transform:none;">
                        <h4>${r.user} <span style="color:#ffd700;">${'★'.repeat(Math.floor(r.rating))}</span></h4>
                        <p style="opacity:0.9;">${r.comment}</p>
                    </div>`).join('');
            }

            // RELATED GAMES (Wapas add kiya)
            const relDiv = document.getElementById('related-games');
            if (relDiv) {
                relDiv.innerHTML = game.relatedGames.map(rid => {
                    const rg = gamesData[rid];
                    return rg ? `
                        <div class="game-card" onclick="location.href='game-detail.html?game=${rid}'" style="opacity:1;">
                            <img src="${rg.img}">
                            <div class="game-info" style="opacity:1;">
                                <h3>${rg.title}</h3>
                            </div>
                        </div>` : '';
                }).join('');
            }

            if (document.getElementById('rating-text')) {
                const avg = game.reviews.reduce((sum, r) => sum + r.rating, 0) / game.reviews.length;
                document.getElementById('rating-text').textContent = `(${avg.toFixed(1)} / 5)`;

            if (gameId && document.getElementById('main-cart-btn')) {
            setupCartButton(gameId);
            }
            }
        }
    }
    

    // Event Delegation for dynamic buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('wishlist-btn')) {
            toggleWishlist(e.target.dataset.game);
        }
        if (e.target.classList.contains('buy-btn') && e.target.dataset.game) {
            e.preventDefault();
            addToCart(e.target.dataset.game);
        }
    });
});

// user.js ke EKDOM END mein paste karo
function checkCompatibility() {
    const btn = document.querySelector('.ios-btn');
    const scanCont = document.getElementById('scan-cont');
    const scanBar = document.getElementById('scan-bar');
    const resultDiv = document.getElementById('compat-result');
    const ratingEl = document.getElementById('result-rating');
    const descEl = document.getElementById('result-desc');

    if(!btn || !scanCont) return; // Safety check

    // UI Reset
    resultDiv.style.display = 'none';
    scanCont.style.display = 'block';
    scanBar.style.width = '0%';
    btn.disabled = true;
    btn.textContent = "Scanning Hardware...";

    setTimeout(() => { scanBar.style.width = '100%'; }, 50);

    setTimeout(() => {
        // Values yahan nikaalna zaroori hai
        const ram = parseInt(document.getElementById('user-ram').value);
        const cpu = parseInt(document.getElementById('user-cpu').value);
        const gpu = parseInt(document.getElementById('user-gpu').value);

        // Specs save karo taaki Cart page use kar sake [Step 2]
        localStorage.setItem('userSpecs', JSON.stringify({ ram, cpu, gpu }));

        scanCont.style.display = 'none';
        btn.disabled = false;
        btn.textContent = "Analyze Performance";
        resultDiv.style.display = 'block';

        if (ram >= 16 && cpu >= 7 && gpu >= 4) {
            ratingEl.textContent = "🚀 EXCELLENT";
            resultDiv.className = 'ios-result-card result-excellent';
            descEl.textContent = "Your rig is a beast. 4K Ultra 60FPS confirmed!";
        } else if (ram >= 8 && cpu >= 5 && gpu >= 2) {
            ratingEl.textContent = "🎮 GOOD";
            resultDiv.className = 'ios-result-card result-good';
            descEl.textContent = "Solid experience. Enjoy High settings at 1080p.";
        } else {
            ratingEl.textContent = "⚠️ POOR";
            resultDiv.className = 'ios-result-card result-poor';
            descEl.textContent = "Upgrade recommended for a smooth experience.";
        }
    }, 1500);
}

// Ye line sabse zaroori hai!
window.checkCompatibility = checkCompatibility;

// --- AUTO HIGHLIGHT ACTIVE NAV TAB ---
function highlightActiveTab() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active-tab');
        } else {
            link.classList.remove('active-tab');
        }
    });
}

// Page load hote hi run karo
window.addEventListener('DOMContentLoaded', highlightActiveTab);

// --- DETAIL PAGE WISHLIST LOGIC ---
function updateDetailWishlistButton(gameId) {
    const btn = document.getElementById('detail-wishlist-btn');
    if (!btn) return;

    let wishlist = getWishlist();
    const isAdded = wishlist.includes(gameId);

    if (isAdded) {
        btn.innerHTML = `❤️ In Wishlist`;
        btn.style.borderColor = "#ff1744";
        btn.style.color = "#ff1744";
    } else {
        btn.innerHTML = `🤍 Add to Wishlist`;
        btn.style.borderColor = "";
        btn.style.color = "";
    }

    btn.onclick = () => {
        toggleWishlist(gameId);
        updateDetailWishlistButton(gameId); // Refresh state
    };
}

