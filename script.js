// Product Data
const products = [
    {
        id: "1",
        name: "Bánh Chocolate Truffle",
        price: 250000,
        originalPrice: 300000,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
        category: "chocolate",
        description: "Bánh chocolate truffle cao cấp với lớp ganache mềm mịn bên trong và lớp chocolate đắng bên ngoài.",
        ingredients: ["Chocolate đen", "Kem tươi", "Bơ", "Đường", "Vanilla"],
        weight: "200g",
        inStock: true,
        featured: true,
        rating: 4.8,
        reviews: 124
    },
    {
        id: "2",
        name: "Kẹo Gấu Haribo",
        price: 45000,
        image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop",
        category: "candy",
        description: "Kẹo dẻo hình gấu nhiều màu sắc với hương vị trái cây tự nhiên.",
        ingredients: ["Đường", "Gelatin", "Hương trái cây", "Màu thực phẩm"],
        weight: "100g",
        inStock: true,
        featured: true,
        rating: 4.5,
        reviews: 89
    },
    {
        id: "3",
        name: "Bánh Cupcake Vanilla",
        price: 35000,
        image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=400&fit=crop",
        category: "cake",
        description: "Bánh cupcake vanilla mềm mịn với lớp kem bơ ngọt ngào và trang trí đẹp mắt.",
        ingredients: ["Bột mì", "Trứng", "Đường", "Bơ", "Vanilla", "Kem tươi"],
        weight: "80g",
        inStock: true,
        featured: false,
        rating: 4.6,
        reviews: 67
    },
    {
        id: "4",
        name: "Bánh Quy Chocolate Chip",
        price: 65000,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop",
        category: "cookie",
        description: "Bánh quy giòn rụm với những mảnh chocolate chip thơm ngon.",
        ingredients: ["Bột mì", "Bơ", "Đường nâu", "Chocolate chip", "Trứng"],
        weight: "150g",
        inStock: true,
        featured: true,
        rating: 4.7,
        reviews: 156
    },
    {
        id: "5",
        name: "Kẹo Dẻo Trái Cây",
        price: 38000,
        image: "https://hadoha.com/wp-content/uploads/2024/10/Keo-deo-trai-cay-Welchs-Mixed-Fruit-Snacks-90-goi-cua-My-3.webp",
        category: "gummy",
        description: "Kẹo dẻo hình trái cây với nhiều hương vị: dâu, cam, nho, táo.",
        ingredients: ["Đường", "Gelatin", "Hương trái cây tự nhiên", "Acid citric"],
        weight: "120g",
        inStock: true,
        featured: false,
        rating: 4.3,
        reviews: 92
    },
    {
        id: "6",
        name: "Bánh Macaron Pháp",
        price: 180000,
        originalPrice: 220000,
        image: "https://aztraining.vn/wp-content/uploads/2023/02/banh-macarons-min.jpg",
        category: "cake",
        description: "Bánh macaron Pháp truyền thống với nhiều hương vị: vanilla, chocolate, dâu, matcha.",
        ingredients: ["Bột hạnh nhân", "Đường bột", "Lòng trắng trứng", "Kem ganache"],
        weight: "100g (6 chiếc)",
        inStock: true,
        featured: true,
        rating: 4.9,
        reviews: 203
    },
    {
        id: "7",
        name: "Chocolate Đen 70%",
        price: 85000,
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=400&fit=crop",
        category: "chocolate",
        description: "Chocolate đen nguyên chất 70% cacao, vị đắng nhẹ và thơm ngon.",
        ingredients: ["Cacao", "Đường", "Bơ cacao", "Lecithin đậu nành"],
        weight: "100g",
        inStock: true,
        featured: false,
        rating: 4.4,
        reviews: 78
    },
    {
        id: "8",
        name: "Kẹo Caramel Muối",
        price: 55000,
        image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=400&fit=crop",
        category: "candy",
        description: "Kẹo caramel mềm với chút muối biển tạo nên hương vị độc đáo.",
        ingredients: ["Đường", "Kem tươi", "Bơ", "Muối biển", "Vanilla"],
        weight: "80g",
        inStock: true,
        featured: false,
        rating: 4.2,
        reviews: 45
    }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('sweetshop-cart')) || [];
let currentFilter = 'all';
let currentSort = 'name';
let currentSearch = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    loadAllProducts();
    updateCartUI();
    showSection('home');
    
    // Add scroll to top button
    createScrollToTopButton();
    
    // Handle scroll events
    window.addEventListener('scroll', handleScroll);
});

// Section Management
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Update URL hash
        window.location.hash = sectionId;
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Close mobile menu if open
        const nav = document.getElementById('mainNav');
        nav.classList.remove('mobile-open');
    }
    
    // Load products if switching to products section
    if (sectionId === 'products') {
        loadAllProducts();
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('mobile-open');
}

// Product Loading Functions
function loadFeaturedProducts() {
    const featuredProducts = products.filter(product => product.featured);
    const container = document.getElementById('featuredProducts');
    container.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function loadAllProducts() {
    let filteredProducts = [...products];
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
    }
    
    // Apply search filter
    if (currentSearch) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            product.description.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }
    
    // Apply sorting
    filteredProducts.sort((a, b) => {
        switch (currentSort) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
    
    const container = document.getElementById('allProducts');
    container.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <div style="font-size: 4rem; margin-bottom: 16px;">🔍</div>
                <h3>Không tìm thấy sản phẩm</h3>
                <p style="color: #6b7280; margin-bottom: 16px;">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
                <button class="btn btn-secondary" onclick="clearFilters()">Xóa bộ lọc</button>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in-up';
    
    const discount = product.originalPrice ? 
        Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    
    const stars = Array.from({length: 5}, (_, i) => 
        `<span class="star ${i < Math.floor(product.rating) ? '' : 'empty'}">⭐</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${discount > 0 ? `<div class="product-badge">-${discount}%</div>` : ''}
            <div class="product-actions">
                <button class="action-btn" onclick="toggleWishlist('${product.id}')" title="Thêm vào yêu thích">
                    ❤️
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">${stars}</div>
                <span class="rating-text">(${product.reviews})</span>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <div class="price-info">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                <span class="product-weight">${product.weight}</span>
            </div>
            <button class="add-to-cart" onclick="addToCart('${product.id}')" ${!product.inStock ? 'disabled' : ''}>
                🛒 ${product.inStock ? 'Thêm vào giỏ' : 'Hết hàng'}
            </button>
        </div>
    `;
    
    // Add click event to open product modal
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.add-to-cart') && !e.target.closest('.action-btn')) {
            openProductModal(product.id);
        }
    });
    
    return card;
}

// Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const overlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = product.name;
    
    const discount = product.originalPrice ? 
        Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    
    const stars = Array.from({length: 5}, (_, i) => 
        `<span class="star ${i < Math.floor(product.rating) ? '' : 'empty'}">⭐</span>`
    ).join('');
    
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
                ${discount > 0 ? `<div class="product-badge">-${discount}%</div>` : ''}
            </div>
            <div class="modal-product-info">
                <h2>${product.name}</h2>
                <div class="modal-product-rating">
                    <div class="stars">${stars}</div>
                    <span>${product.rating} (${product.reviews} đánh giá)</span>
                </div>
                <div class="modal-product-price">
                    <span class="modal-current-price">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `<span class="modal-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                <p class="modal-product-description">${product.description}</p>
                <div class="modal-product-ingredients">
                    <h4>Thành phần:</h4>
                    <div class="ingredients-list">
                        ${product.ingredients.map(ingredient => `<span class="ingredient-tag">${ingredient}</span>`).join('')}
                    </div>
                </div>
                <p><strong>Trọng lượng:</strong> ${product.weight}</p>
                <div class="modal-quantity-controls">
                    <span>Số lượng:</span>
                    <button class="quantity-btn" onclick="changeModalQuantity(-1)">-</button>
                    <span class="quantity" id="modalQuantity">1</span>
                    <button class="quantity-btn" onclick="changeModalQuantity(1)">+</button>
                </div>
                <button class="btn btn-primary modal-add-to-cart" onclick="addToCartFromModal('${product.id}')" ${!product.inStock ? 'disabled' : ''}>
                    🛒 ${product.inStock ? 'Thêm vào giỏ hàng' : 'Hết hàng'}
                </button>
                <div style="margin-top: 16px;">
                    <span style="color: ${product.inStock ? '#10b981' : '#ef4444'};">
                        ${product.inStock ? '✅ Còn hàng' : '❌ Hết hàng'}
                    </span>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    const overlay = document.getElementById('modalOverlay');
    
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset quantity
    document.getElementById('modalQuantity').textContent = '1';
}

function changeModalQuantity(delta) {
    const quantityElement = document.getElementById('modalQuantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity = Math.max(1, Math.min(10, quantity + delta));
    quantityElement.textContent = quantity;
}

function addToCartFromModal(productId) {
    const quantity = parseInt(document.getElementById('modalQuantity').textContent);
    addToCart(productId, quantity);
    closeProductModal();
}

// Cart Management
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartUI();
    showMessage(`Đã thêm ${product.name} vào giỏ hàng!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateCartQuantity(productId, quantity) {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.min(10, quantity);
        saveCart();
        updateCartUI();
    }
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('sweetshop-cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Giỏ hàng trống</p>
            </div>
        `;
        cartFooter.style.display = 'none';
        return;
    }
    
    cartItems.innerHTML = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;
        
        const itemTotal = product.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${product.name}</div>
                <div class="cart-item-price">${formatPrice(itemTotal)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    <button class="remove-item" onclick="removeFromCart('${item.id}')">🗑️</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    const shipping = subtotal >= 500000 ? 0 : 30000;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('shipping').textContent = shipping === 0 ? 'Miễn phí' : formatPrice(shipping);
    document.getElementById('total').textContent = formatPrice(total);
    
    cartFooter.style.display = 'block';
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
    
    if (cartSidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function checkout() {
    if (cart.length === 0) {
        showMessage('Giỏ hàng trống!', 'error');
        return;
    }
    
    // Simulate checkout process
    showMessage('Đang xử lý đơn hàng...', 'success');
    
    setTimeout(() => {
        clearCart();
        toggleCart();
        showMessage('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.', 'success');
    }, 2000);
}

// Search and Filter Functions
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query) {
        currentSearch = query;
        showSection('products');
        loadAllProducts();
        
        // Update search input in products section
        document.getElementById('productSearch').value = query;
    }
}

function filterProducts(category) {
    currentFilter = category;
    showSection('products');
    loadAllProducts();
    
    // Update category filter dropdown
    document.getElementById('categoryFilter').value = category;
}

function filterProductsSearch() {
    const searchInput = document.getElementById('productSearch');
    currentSearch = searchInput.value.trim();
    loadAllProducts();
}

function filterProductsCategory() {
    const categoryFilter = document.getElementById('categoryFilter');
    currentFilter = categoryFilter.value;
    loadAllProducts();
}

function sortProducts() {
    const sortFilter = document.getElementById('sortFilter');
    currentSort = sortFilter.value;
    loadAllProducts();
}

function clearFilters() {
    currentFilter = 'all';
    currentSearch = '';
    currentSort = 'name';
    
    document.getElementById('productSearch').value = '';
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('sortFilter').value = 'name';
    
    loadAllProducts();
}

// Contact Form
function submitContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        showMessage('Vui lòng điền đầy đủ thông tin bắt buộc', 'error');
        return;
    }
    
    // Simulate form submission
    showMessage('Đang gửi tin nhắn...', 'success');
    
    setTimeout(() => {
        showMessage('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.', 'success');
        event.target.reset();
    }, 1500);
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function showMessage(message, type = 'success') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert at the top of the page
    document.body.insertBefore(messageDiv, document.body.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

function toggleWishlist(productId) {
    // Placeholder for wishlist functionality
    showMessage('Tính năng yêu thích sẽ có trong phiên bản tiếp theo!', 'success');
}

// Scroll to top functionality
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.className = 'scroll-to-top';
    button.innerHTML = '↑';
    button.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    document.body.appendChild(button);
}

function handleScroll() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
}

// Handle browser back/forward buttons
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.slice(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
});

// Handle initial hash on page load
window.addEventListener('load', function() {
    const hash = window.location.hash.slice(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close modals/cart
    if (e.key === 'Escape') {
        const cartSidebar = document.getElementById('cartSidebar');
        const productModal = document.getElementById('productModal');
        
        if (cartSidebar.classList.contains('open')) {
            toggleCart();
        } else if (productModal.classList.contains('active')) {
            closeProductModal();
        }
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        searchInput.focus();
    }
});

// Performance optimization: Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}