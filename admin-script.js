// Admin JavaScript

// Sample data for demonstration
let adminProducts = [...products]; // Import from main script.js
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
        status: "active"
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
            text: 'Đơn hàng mới #ORD003 từ Lê Văn C',
            time: '5 phút trước'
        },
        {
            type: 'customer',
            icon: '👤',
            text: 'Khách hàng mới Trần Thị B đã đăng ký',
            time: '15 phút trước'
        },
        {
            type: 'product',
            icon: '🛍️',
            text: 'Sản phẩm "Bánh Chocolate Truffle" sắp hết hàng',
            time: '1 giờ trước'
        },
        {
            type: 'order',
            icon: '✅',
            text: 'Đơn hàng #ORD001 đã hoàn thành',
            time: '2 giờ trước'
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
            <td><strong>${customer.name}</strong></td>
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