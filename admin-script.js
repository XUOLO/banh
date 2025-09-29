// Admin JavaScript

// Expanded sample data for demonstration
let adminProducts = [
    // Chocolate products
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
        stock: 25,
        inStock: true,
        featured: true,
        rating: 4.8,
        reviews: 124
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
        stock: 40,
        inStock: true,
        featured: false,
        rating: 4.4,
        reviews: 78
    },
    {
        id: "CHOC001",
        name: "Chocolate Sữa Belcolade",
        price: 120000,
        originalPrice: 150000,
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop",
        category: "chocolate",
        description: "Chocolate sữa Belcolade Bỉ cao cấp, vị ngọt dịu và béo ngậy.",
        ingredients: ["Chocolate sữa", "Sữa bột", "Đường", "Bơ cacao", "Vanilla"],
        weight: "150g",
        stock: 30,
        inStock: true,
        featured: true,
        rating: 4.7,
        reviews: 95
    },
    {
        id: "CHOC002",
        name: "Chocolate Trắng Valrhona",
        price: 180000,
        image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop",
        category: "chocolate",
        description: "Chocolate trắng Valrhona Pháp, vị ngọt tinh tế và thơm béo.",
        ingredients: ["Bơ cacao", "Sữa bột", "Đường", "Lecithin", "Vanilla"],
        weight: "120g",
        stock: 15,
        inStock: true,
        featured: false,
        rating: 4.6,
        reviews: 67
    },

    // Candy products
    {
        id: "2",
        name: "Kẹo Gấu Haribo",
        price: 45000,
        image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop",
        category: "candy",
        description: "Kẹo dẻo hình gấu nhiều màu sắc với hương vị trái cây tự nhiên.",
        ingredients: ["Đường", "Gelatin", "Hương trái cây", "Màu thực phẩm"],
        weight: "100g",
        stock: 60,
        inStock: true,
        featured: true,
        rating: 4.5,
        reviews: 89
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
        stock: 35,
        inStock: true,
        featured: false,
        rating: 4.2,
        reviews: 45
    },
    {
        id: "CANDY001",
        name: "Kẹo Mút Chupa Chups",
        price: 25000,
        image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop",
        category: "candy",
        description: "Kẹo mút Chupa Chups với nhiều hương vị: dâu, cam, nho, táo.",
        ingredients: ["Đường", "Glucose", "Hương liệu tự nhiên", "Màu thực phẩm"],
        weight: "12g x 10 cái",
        stock: 80,
        inStock: true,
        featured: false,
        rating: 4.3,
        reviews: 156
    },
    {
        id: "CANDY002",
        name: "Kẹo Dẻo Worms",
        price: 38000,
        image: "https://images.unsplash.com/photo-1571506165871-ee72a35836d0?w=400&h=400&fit=crop",
        category: "candy",
        description: "Kẹo dẻo hình sâu nhiều màu với vị chua ngọt hấp dẫn.",
        ingredients: ["Đường", "Gelatin", "Acid citric", "Hương trái cây", "Màu thực phẩm"],
        weight: "150g",
        stock: 45,
        inStock: true,
        featured: false,
        rating: 4.1,
        reviews: 73
    },
    {
        id: "CANDY003",
        name: "Kẹo Bông Gòn Cotton Candy",
        price: 30000,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        category: "candy",
        description: "Kẹo bông gòn mềm mịn, tan trong miệng với hương vị ngọt dịu.",
        ingredients: ["Đường", "Hương liệu", "Màu thực phẩm"],
        weight: "50g",
        stock: 0,
        inStock: false,
        featured: false,
        rating: 4.4,
        reviews: 92
    },

    // Cake products
    {
        id: "3",
        name: "Bánh Cupcake Vanilla",
        price: 35000,
        image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=400&fit=crop",
        category: "cake",
        description: "Bánh cupcake vanilla mềm mịn với lớp kem bơ ngọt ngào và trang trí đẹp mắt.",
        ingredients: ["Bột mì", "Trứng", "Đường", "Bơ", "Vanilla", "Kem tươi"],
        weight: "80g",
        stock: 20,
        inStock: true,
        featured: false,
        rating: 4.6,
        reviews: 67
    },
    {
        id: "6",
        name: "Bánh Macaron Pháp",
        price: 180000,
        originalPrice: 220000,
        image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=400&fit=crop",
        category: "cake",
        description: "Bánh macaron Pháp truyền thống với nhiều hương vị: vanilla, chocolate, dâu, matcha.",
        ingredients: ["Bột hạnh nhân", "Đường bột", "Lòng trắng trứng", "Kem ganache"],
        weight: "100g (6 chiếc)",
        stock: 12,
        inStock: true,
        featured: true,
        rating: 4.9,
        reviews: 203
    },
    {
        id: "CAKE001",
        name: "Bánh Tiramisu Mini",
        price: 65000,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop",
        category: "cake",
        description: "Bánh tiramisu mini với lớp mascarpone mềm mịn và cà phê espresso thơm đậm.",
        ingredients: ["Mascarpone", "Cà phê espresso", "Bánh ladyfinger", "Đường", "Trứng"],
        weight: "120g",
        stock: 18,
        inStock: true,
        featured: true,
        rating: 4.8,
        reviews: 134
    },
    {
        id: "CAKE002",
        name: "Bánh Cheesecake Dâu",
        price: 85000,
        originalPrice: 100000,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop",
        category: "cake",
        description: "Bánh cheesecake mềm mịn với lớp dâu tây tươi ngon và đế bánh quy giòn.",
        ingredients: ["Cream cheese", "Dâu tây", "Đường", "Trứng", "Bánh quy graham"],
        weight: "150g",
        stock: 25,
        inStock: true,
        featured: false,
        rating: 4.7,
        reviews: 98
    },
    {
        id: "CAKE003",
        name: "Bánh Muffin Blueberry",
        price: 40000,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
        category: "cake",
        description: "Bánh muffin với quả việt quất tươi, mềm xốp và thơm ngon.",
        ingredients: ["Bột mì", "Quả việt quất", "Trứng", "Sữa", "Bơ", "Đường"],
        weight: "90g",
        stock: 30,
        inStock: true,
        featured: false,
        rating: 4.5,
        reviews: 76
    },

    // Cookie products
    {
        id: "4",
        name: "Bánh Quy Chocolate Chip",
        price: 65000,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop",
        category: "cookie",
        description: "Bánh quy giòn rụm với những mảnh chocolate chip thơm ngon.",
        ingredients: ["Bột mì", "Bơ", "Đường nâu", "Chocolate chip", "Trứng"],
        weight: "150g",
        stock: 40,
        inStock: true,
        featured: true,
        rating: 4.7,
        reviews: 156
    },
    {
        id: "COOKIE001",
        name: "Bánh Quy Bơ Đan Mạch",
        price: 75000,
        originalPrice: 90000,
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=400&fit=crop",
        category: "cookie",
        description: "Bánh quy bơ Đan Mạch truyền thống, giòn tan và thơm béo.",
        ingredients: ["Bột mì", "Bơ", "Đường", "Trứng", "Vanilla", "Muối"],
        weight: "200g",
        stock: 35,
        inStock: true,
        featured: false,
        rating: 4.6,
        reviews: 89
    },
    {
        id: "COOKIE002",
        name: "Bánh Quy Yến Mạch",
        price: 55000,
        image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&h=400&fit=crop",
        category: "cookie",
        description: "Bánh quy yến mạch bổ dưỡng với nho khô và hạt óc chó.",
        ingredients: ["Yến mạch", "Bột mì", "Nho khô", "Hạt óc chó", "Bơ", "Đường nâu"],
        weight: "180g",
        stock: 28,
        inStock: true,
        featured: false,
        rating: 4.4,
        reviews: 65
    },
    {
        id: "COOKIE003",
        name: "Bánh Quy Gừng",
        price: 50000,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
        category: "cookie",
        description: "Bánh quy gừng thơm cay, giòn rụm với hương vị truyền thống.",
        ingredients: ["Bột mì", "Gừng", "Quế", "Đinh hương", "Bơ", "Đường nâu"],
        weight: "160g",
        stock: 22,
        inStock: true,
        featured: false,
        rating: 4.3,
        reviews: 54
    },

    // Gummy products
    {
        id: "5",
        name: "Kẹo Dẻo Trái Cây",
        price: 38000,
        image: "https://images.unsplash.com/photo-1571506165871-ee72a35836d0?w=400&h=400&fit=crop",
        category: "gummy",
        description: "Kẹo dẻo hình trái cây với nhiều hương vị: dâu, cam, nho, táo.",
        ingredients: ["Đường", "Gelatin", "Hương trái cây tự nhiên", "Acid citric"],
        weight: "120g",
        stock: 50,
        inStock: true,
        featured: false,
        rating: 4.3,
        reviews: 92
    },
    {
        id: "GUMMY001",
        name: "Kẹo Dẻo Cola",
        price: 42000,
        image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop",
        category: "gummy",
        description: "Kẹo dẻo hình chai cola với vị chua ngọt đặc trưng.",
        ingredients: ["Đường", "Gelatin", "Hương cola", "Acid citric", "Màu caramel"],
        weight: "100g",
        stock: 38,
        inStock: true,
        featured: false,
        rating: 4.2,
        reviews: 78
    },
    {
        id: "GUMMY002",
        name: "Kẹo Dẻo Shark",
        price: 45000,
        image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop",
        category: "gummy",
        description: "Kẹo dẻo hình cá mập với nhiều màu sắc và hương vị biển.",
        ingredients: ["Đường", "Gelatin", "Hương biển", "Màu xanh", "Acid citric"],
        weight: "130g",
        stock: 0,
        inStock: false,
        featured: false,
        rating: 4.1,
        reviews: 63
    },
    {
        id: "GUMMY003",
        name: "Kẹo Dẻo Rainbow",
        price: 48000,
        originalPrice: 55000,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        category: "gummy",
        description: "Kẹo dẻo cầu vồng 7 màu với 7 hương vị trái cây khác nhau.",
        ingredients: ["Đường", "Gelatin", "Hương trái cây", "Màu thực phẩm tự nhiên"],
        weight: "140g",
        stock: 32,
        inStock: true,
        featured: true,
        rating: 4.6,
        reviews: 145
    }
];

let adminOrders = [
    {
        id: "ORD001",
        customer: "Nguyễn Văn A",
        email: "nguyenvana@email.com",
        phone: "0901234567",
        date: "2024-01-15",
        total: 450000,
        status: "completed",
        items: [
            { productId: "1", quantity: 2, price: 250000 },
            { productId: "2", quantity: 1, price: 45000 }
        ],
        address: "123 Đường ABC, Quận 1, TP.HCM"
    },
    {
        id: "ORD002",
        customer: "Trần Thị B",
        email: "tranthib@email.com",
        phone: "0987654321",
        date: "2024-01-16",
        total: 180000,
        status: "processing",
        items: [
            { productId: "6", quantity: 1, price: 180000 }
        ],
        address: "456 Đường XYZ, Quận 2, TP.HCM"
    },
    {
        id: "ORD003",
        customer: "Lê Văn C",
        email: "levanc@email.com",
        phone: "0912345678",
        date: "2024-01-17",
        total: 65000,
        status: "pending",
        items: [
            { productId: "4", quantity: 1, price: 65000 }
        ],
        address: "789 Đường DEF, Quận 3, TP.HCM"
    },
    {
        id: "ORD004",
        customer: "Phạm Thị D",
        email: "phamthid@email.com",
        phone: "0923456789",
        date: "2024-01-18",
        total: 320000,
        status: "shipping",
        items: [
            { productId: "CHOC001", quantity: 2, price: 120000 },
            { productId: "CAKE001", quantity: 1, price: 65000 },
            { productId: "CANDY001", quantity: 2, price: 25000 }
        ],
        address: "321 Đường GHI, Quận 4, TP.HCM"
    },
    {
        id: "ORD005",
        customer: "Hoàng Văn E",
        email: "hoangvane@email.com",
        phone: "0934567890",
        date: "2024-01-19",
        total: 275000,
        status: "completed",
        items: [
            { productId: "CAKE002", quantity: 2, price: 85000 },
            { productId: "COOKIE001", quantity: 1, price: 75000 },
            { productId: "GUMMY003", quantity: 1, price: 48000 }
        ],
        address: "654 Đường JKL, Quận 5, TP.HCM"
    },
    {
        id: "ORD006",
        customer: "Võ Thị F",
        email: "vothif@email.com",
        phone: "0945678901",
        date: "2024-01-20",
        total: 155000,
        status: "cancelled",
        items: [
            { productId: "CHOC002", quantity: 1, price: 180000 }
        ],
        address: "987 Đường MNO, Quận 6, TP.HCM"
    },
    {
        id: "ORD007",
        customer: "Đặng Văn G",
        email: "dangvang@email.com",
        phone: "0956789012",
        date: "2024-01-21",
        total: 190000,
        status: "processing",
        items: [
            { productId: "CAKE003", quantity: 2, price: 40000 },
            { productId: "COOKIE002", quantity: 1, price: 55000 },
            { productId: "COOKIE003", quantity: 1, price: 50000 }
        ],
        address: "147 Đường PQR, Quận 7, TP.HCM"
    },
    {
        id: "ORD008",
        customer: "Bùi Thị H",
        email: "buithih@email.com",
        phone: "0967890123",
        date: "2024-01-22",
        total: 126000,
        status: "pending",
        items: [
            { productId: "GUMMY001", quantity: 3, price: 42000 }
        ],
        address: "258 Đường STU, Quận 8, TP.HCM"
    }
];

let adminCustomers = [
    {
        id: "CUST001",
        name: "Nguyễn Văn A",
        email: "nguyenvana@email.com",
        phone: "0901234567",
        orders: 5,
        totalSpent: 1250000,
        joinDate: "2023-12-01",
        status: "vip"
    },
    {
        id: "CUST002",
        name: "Trần Thị B",
        email: "tranthib@email.com",
        phone: "0987654321",
        orders: 3,
        totalSpent: 680000,
        joinDate: "2024-01-05",
        status: "active"
    },
    {
        id: "CUST003",
        name: "Lê Văn C",
        email: "levanc@email.com",
        phone: "0912345678",
        orders: 1,
        totalSpent: 65000,
        joinDate: "2024-01-15",
        status: "new"
    },
    {
        id: "CUST004",
        name: "Phạm Thị D",
        email: "phamthid@email.com",
        phone: "0923456789",
        orders: 4,
        totalSpent: 890000,
        joinDate: "2023-11-20",
        status: "active"
    },
    {
        id: "CUST005",
        name: "Hoàng Văn E",
        email: "hoangvane@email.com",
        phone: "0934567890",
        orders: 6,
        totalSpent: 1450000,
        joinDate: "2023-10-15",
        status: "vip"
    },
    {
        id: "CUST006",
        name: "Võ Thị F",
        email: "vothif@email.com",
        phone: "0945678901",
        orders: 2,
        totalSpent: 320000,
        joinDate: "2024-01-10",
        status: "active"
    },
    {
        id: "CUST007",
        name: "Đặng Văn G",
        email: "dangvang@email.com",
        phone: "0956789012",
        orders: 3,
        totalSpent: 560000,
        joinDate: "2023-12-25",
        status: "active"
    },
    {
        id: "CUST008",
        name: "Bùi Thị H",
        email: "buithih@email.com",
        phone: "0967890123",
        orders: 1,
        totalSpent: 126000,
        joinDate: "2024-01-20",
        status: "new"
    },
    {
        id: "CUST009",
        name: "Lý Văn I",
        email: "lyvani@email.com",
        phone: "0978901234",
        orders: 8,
        totalSpent: 2100000,
        joinDate: "2023-09-10",
        status: "vip"
    },
    {
        id: "CUST010",
        name: "Trương Thị K",
        email: "truongthik@email.com",
        phone: "0989012345",
        orders: 2,
        totalSpent: 280000,
        joinDate: "2024-01-08",
        status: "active"
    }
];

// Current filters
let currentAdminFilters = {
    products: { search: '', category: 'all', status: 'all' },
    orders: { search: '', status: 'all', date: '' },
    customers: { search: '', status: 'all' }
};

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    showAdminSection('dashboard');
    loadDashboardData();
    loadAdminProducts();
    loadAdminOrders();
    loadAdminCustomers();
    loadRecentActivity();
    
    // Setup form handlers
    setupFormHandlers();
});

// Section Management
function showAdminSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[onclick="showAdminSection('${sectionId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Load section-specific data
    switch(sectionId) {
        case 'dashboard':
            loadDashboardData();
            break;
        case 'products':
            loadAdminProducts();
            break;
        case 'orders':
            loadAdminOrders();
            break;
        case 'customers':
            loadAdminCustomers();
            break;
        case 'analytics':
            loadAnalytics();
            break;
    }
}

// Dashboard Functions
function loadDashboardData() {
    // Update stats (in real app, this would come from API)
    updateDashboardStats();
    loadRecentActivity();
}

function updateDashboardStats() {
    // Calculate stats from sample data
    const todayRevenue = 2450000;
    const newOrders = adminOrders.filter(order => order.status === 'pending').length;
    const newCustomers = adminCustomers.filter(customer => customer.status === 'new').length;
    const totalProducts = adminProducts.length;
    
    // Update UI (stats are already hardcoded in HTML for demo)
}

function loadRecentActivity() {
    const activities = [
        {
            type: 'order',
            icon: '📦',
            text: 'Đơn hàng mới #ORD008 từ Bùi Thị H',
            time: '5 phút trước'
        },
        {
            type: 'customer',
            icon: '👤',
            text: 'Khách hàng mới Trương Thị K đã đăng ký',
            time: '15 phút trước'
        },
        {
            type: 'product',
            icon: '🛍️',
            text: 'Sản phẩm "Kẹo Bông Gòn Cotton Candy" đã hết hàng',
            time: '30 phút trước'
        },
        {
            type: 'order',
            icon: '✅',
            text: 'Đơn hàng #ORD005 đã hoàn thành',
            time: '1 giờ trước'
        },
        {
            type: 'product',
            icon: '🍫',
            text: 'Sản phẩm "Chocolate Trắng Valrhona" sắp hết hàng',
            time: '2 giờ trước'
        },
        {
            type: 'order',
            icon: '🚚',
            text: 'Đơn hàng #ORD004 đang được giao',
            time: '3 giờ trước'
        }
    ];
    
    const container = document.getElementById('recentActivity');
    container.innerHTML = '';
    
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <div class="activity-icon ${activity.type}">
                ${activity.icon}
            </div>
            <div class="activity-text">
                <p>${activity.text}</p>
                <span>${activity.time}</span>
            </div>
        `;
        container.appendChild(activityItem);
    });
}

// Product Management
function loadAdminProducts() {
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = '';
    
    let filteredProducts = [...adminProducts];
    
    // Apply filters
    const filters = currentAdminFilters.products;
    if (filters.search) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(filters.search.toLowerCase())
        );
    }
    
    if (filters.category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }
    
    if (filters.status !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            filters.status === 'inStock' ? product.inStock : !product.inStock
        );
    }
    
    if (filteredProducts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-state">
                    <div class="empty-state-icon">📦</div>
                    <h3>Không tìm thấy sản phẩm</h3>
                    <p>Thử thay đổi bộ lọc hoặc thêm sản phẩm mới</p>
                </td>
            </tr>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </td>
            <td>
                <strong>${product.name}</strong><br>
                <small>${product.description.substring(0, 50)}...</small>
            </td>
            <td>${getCategoryName(product.category)}</td>
            <td>
                <strong>${formatPrice(product.price)}</strong>
                ${product.originalPrice ? `<br><small style="text-decoration: line-through;">${formatPrice(product.originalPrice)}</small>` : ''}
            </td>
            <td>${product.stock || 0}</td>
            <td>
                <span class="status-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? 'Còn hàng' : 'Hết hàng'}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit" onclick="editProduct('${product.id}')">Sửa</button>
                    <button class="action-btn delete" onclick="deleteProduct('${product.id}')">Xóa</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function filterAdminProducts() {
    const search = document.getElementById('productSearchAdmin').value;
    const category = document.getElementById('categoryFilterAdmin').value;
    const status = document.getElementById('statusFilterAdmin').value;
    
    currentAdminFilters.products = { search, category, status };
    loadAdminProducts();
}

function showAddProductModal() {
    const modal = document.getElementById('productModal');
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('productModalTitle');
    const form = document.getElementById('productForm');
    
    title.textContent = 'Thêm sản phẩm mới';
    form.reset();
    document.getElementById('productId').value = '';
    
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function editProduct(productId) {
    const product = adminProducts.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('productModalTitle');
    
    title.textContent = 'Chỉnh sửa sản phẩm';
    
    // Fill form with product data
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productOriginalPrice').value = product.originalPrice || '';
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productWeight').value = product.weight;
    document.getElementById('productStock').value = product.stock || 0;
    document.getElementById('productImage').value = product.image;
    document.getElementById('productIngredients').value = product.ingredients.join('\n');
    document.getElementById('productInStock').checked = product.inStock;
    document.getElementById('productFeatured').checked = product.featured;
    
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function deleteProduct(productId) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
        adminProducts = adminProducts.filter(p => p.id !== productId);
        loadAdminProducts();
        showMessage('Đã xóa sản phẩm thành công!', 'success');
    }
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    const overlay = document.getElementById('modalOverlay');
    
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Order Management
function loadAdminOrders() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = '';
    
    let filteredOrders = [...adminOrders];
    
    // Apply filters
    const filters = currentAdminFilters.orders;
    if (filters.search) {
        filteredOrders = filteredOrders.filter(order => 
            order.id.toLowerCase().includes(filters.search.toLowerCase()) ||
            order.customer.toLowerCase().includes(filters.search.toLowerCase())
        );
    }
    
    if (filters.status !== 'all') {
        filteredOrders = filteredOrders.filter(order => order.status === filters.status);
    }
    
    if (filters.date) {
        filteredOrders = filteredOrders.filter(order => order.date === filters.date);
    }
    
    if (filteredOrders.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="empty-state">
                    <div class="empty-state-icon">📦</div>
                    <h3>Không tìm thấy đơn hàng</h3>
                    <p>Thử thay đổi bộ lọc tìm kiếm</p>
                </td>
            </tr>
        `;
        return;
    }
    
    filteredOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${order.id}</strong></td>
            <td>
                <strong>${order.customer}</strong><br>
                <small>${order.email}</small>
            </td>
            <td>${formatDate(order.date)}</td>
            <td><strong>${formatPrice(order.total)}</strong></td>
            <td>
                <span class="status-badge ${order.status}">
                    ${getOrderStatusText(order.status)}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn view" onclick="viewOrder('${order.id}')">Xem</button>
                    <button class="action-btn edit" onclick="updateOrderStatus('${order.id}')">Cập nhật</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function filterAdminOrders() {
    const search = document.getElementById('orderSearchAdmin').value;
    const status = document.getElementById('orderStatusFilter').value;
    const date = document.getElementById('orderDateFilter').value;
    
    currentAdminFilters.orders = { search, status, date };
    loadAdminOrders();
}

function viewOrder(orderId) {
    const order = adminOrders.find(o => o.id === orderId);
    if (!order) return;
    
    const modal = document.getElementById('orderModal');
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('orderModalTitle');
    const body = document.getElementById('orderModalBody');
    
    title.textContent = `Chi tiết đơn hàng ${order.id}`;
    
    const orderItems = order.items.map(item => {
        const product = adminProducts.find(p => p.id === item.productId);
        return `
            <tr>
                <td>${product ? product.name : 'Sản phẩm không tồn tại'}</td>
                <td>${item.quantity}</td>
                <td>${formatPrice(item.price)}</td>
                <td>${formatPrice(item.price * item.quantity)}</td>
            </tr>
        `;
    }).join('');
    
    body.innerHTML = `
        <div class="order-details">
            <div class="order-info">
                <h4>Thông tin khách hàng</h4>
                <p><strong>Tên:</strong> ${order.customer}</p>
                <p><strong>Email:</strong> ${order.email}</p>
                <p><strong>Điện thoại:</strong> ${order.phone}</p>
                <p><strong>Địa chỉ:</strong> ${order.address}</p>
            </div>
            
            <div class="order-items">
                <h4>Sản phẩm đặt hàng</h4>
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orderItems}
                    </tbody>
                </table>
            </div>
            
            <div class="order-summary">
                <h4>Tổng kết đơn hàng</h4>
                <p><strong>Ngày đặt:</strong> ${formatDate(order.date)}</p>
                <p><strong>Trạng thái:</strong> 
                    <span class="status-badge ${order.status}">
                        ${getOrderStatusText(order.status)}
                    </span>
                </p>
                <p><strong>Tổng tiền:</strong> ${formatPrice(order.total)}</p>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateOrderStatus(orderId) {
    const order = adminOrders.find(o => o.id === orderId);
    if (!order) return;
    
    const newStatus = prompt('Nhập trạng thái mới (pending/processing/shipping/completed/cancelled):', order.status);
    if (newStatus && ['pending', 'processing', 'shipping', 'completed', 'cancelled'].includes(newStatus)) {
        order.status = newStatus;
        loadAdminOrders();
        showMessage('Đã cập nhật trạng thái đơn hàng!', 'success');
    }
}

function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    const overlay = document.getElementById('modalOverlay');
    
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function exportOrders() {
    showMessage('Tính năng xuất Excel sẽ có trong phiên bản tiếp theo!', 'info');
}

// Customer Management
function loadAdminCustomers() {
    const tbody = document.getElementById('customersTableBody');
    tbody.innerHTML = '';
    
    let filteredCustomers = [...adminCustomers];
    
    // Apply search filter
    const search = currentAdminFilters.customers.search;
    if (search) {
        filteredCustomers = filteredCustomers.filter(customer => 
            customer.name.toLowerCase().includes(search.toLowerCase()) ||
            customer.email.toLowerCase().includes(search.toLowerCase())
        );
    }
    
    if (filteredCustomers.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-state">
                    <div class="empty-state-icon">👥</div>
                    <h3>Không tìm thấy khách hàng</h3>
                    <p>Thử thay đổi từ khóa tìm kiếm</p>
                </td>
            </tr>
        `;
        return;
    }
    
    filteredCustomers.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <strong>${customer.name}</strong>
                ${customer.status === 'vip' ? '<span class="status-badge completed" style="margin-left: 8px;">VIP</span>' : ''}
            </td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.orders}</td>
            <td><strong>${formatPrice(customer.totalSpent)}</strong></td>
            <td>${formatDate(customer.joinDate)}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn view" onclick="viewCustomer('${customer.id}')">Xem</button>
                    <button class="action-btn edit" onclick="editCustomer('${customer.id}')">Sửa</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function viewCustomer(customerId) {
    showMessage('Tính năng xem chi tiết khách hàng sẽ có trong phiên bản tiếp theo!', 'info');
}

function editCustomer(customerId) {
    showMessage('Tính năng chỉnh sửa khách hàng sẽ có trong phiên bản tiếp theo!', 'info');
}

function exportCustomers() {
    showMessage('Tính năng xuất danh sách khách hàng sẽ có trong phiên bản tiếp theo!', 'info');
}

// Analytics
function loadAnalytics() {
    showMessage('Đang tải dữ liệu thống kê...', 'info');
    // In a real app, this would load chart data
}

function updateAnalytics() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    showMessage(`Đã cập nhật thống kê từ ${startDate} đến ${endDate}`, 'success');
}

// Settings
function setupFormHandlers() {
    // General Settings Form
    document.getElementById('generalSettingsForm').addEventListener('submit', function(e) {
        e.preventDefault();
        showMessage('Đã lưu cài đặt chung!', 'success');
    });
    
    // Shipping Settings Form
    document.getElementById('shippingSettingsForm').addEventListener('submit', function(e) {
        e.preventDefault();
        showMessage('Đã lưu cài đặt vận chuyển!', 'success');
    });
    
    // Payment Settings Form
    document.getElementById('paymentSettingsForm').addEventListener('submit', function(e) {
        e.preventDefault();
        showMessage('Đã lưu cài đặt thanh toán!', 'success');
    });
    
    // Notification Settings Form
    document.getElementById('notificationSettingsForm').addEventListener('submit', function(e) {
        e.preventDefault();
        showMessage('Đã lưu cài đặt thông báo!', 'success');
    });
    
    // Product Form
    document.getElementById('productForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveProduct();
    });
}

function saveProduct() {
    const formData = new FormData(document.getElementById('productForm'));
    const productData = {
        id: formData.get('id') || generateId(),
        name: formData.get('name'),
        category: formData.get('category'),
        price: parseInt(formData.get('price')),
        originalPrice: formData.get('originalPrice') ? parseInt(formData.get('originalPrice')) : null,
        description: formData.get('description'),
        weight: formData.get('weight'),
        stock: parseInt(formData.get('stock')) || 0,
        image: formData.get('image') || 'https://via.placeholder.com/400x400',
        ingredients: formData.get('ingredients').split('\n').filter(i => i.trim()),
        inStock: formData.has('inStock'),
        featured: formData.has('featured'),
        rating: 4.5,
        reviews: 0
    };
    
    const existingIndex = adminProducts.findIndex(p => p.id === productData.id);
    if (existingIndex >= 0) {
        adminProducts[existingIndex] = productData;
        showMessage('Đã cập nhật sản phẩm thành công!', 'success');
    } else {
        adminProducts.push(productData);
        showMessage('Đã thêm sản phẩm mới thành công!', 'success');
    }
    
    closeProductModal();
    loadAdminProducts();
}

// Utility Functions
function generateId() {
    return 'PROD' + Date.now().toString().slice(-6);
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}

function getCategoryName(category) {
    const categories = {
        chocolate: 'Chocolate',
        candy: 'Kẹo',
        cake: 'Bánh ngọt',
        cookie: 'Bánh quy',
        gummy: 'Kẹo dẻo'
    };
    return categories[category] || category;
}

function getOrderStatusText(status) {
    const statusTexts = {
        pending: 'Chờ xử lý',
        processing: 'Đang xử lý',
        shipping: 'Đang giao',
        completed: 'Hoàn thành',
        cancelled: 'Đã hủy'
    };
    return statusTexts[status] || status;
}

function showMessage(message, type = 'success') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert at the top of the main content
    const mainContent = document.querySelector('.admin-main');
    mainContent.insertBefore(messageDiv, mainContent.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

function showNotifications() {
    showMessage('Bạn có 3 thông báo mới: 2 đơn hàng mới và 1 sản phẩm sắp hết hàng', 'info');
}

function logout() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        window.location.href = 'index.html';
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        const overlay = document.getElementById('modalOverlay');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Ctrl/Cmd + N to add new product
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        const currentSection = document.querySelector('.admin-section.active');
        if (currentSection && currentSection.id === 'products') {
            showAddProductModal();
        }
    }
});

// Close modals when clicking overlay
document.getElementById('modalOverlay').addEventListener('click', function() {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    this.classList.remove('active');
    document.body.style.overflow = '';
});

// Auto-refresh data every 30 seconds (in real app)
setInterval(() => {
    const currentSection = document.querySelector('.admin-section.active');
    if (currentSection && currentSection.id === 'dashboard') {
        loadRecentActivity();
    }
}, 30000);