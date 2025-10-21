const DataManager = {
    // Default data
    defaultProducts: [
        {
            id: 1,
            name: 'iPhone 15 Pro',
            category: 'Điện thoại',
            price: 29990000,
            quantity: 15,
            description: 'Điện thoại thông minh cao cấp'
        },
        {
            id: 2,
            name: 'MacBook Air M2',
            category: 'Laptop',
            price: 28990000,
            quantity: 8,
            description: 'Laptop siêu mỏng nhẹ'
        },
        {
            id: 3,
            name: 'AirPods Pro',
            category: 'Phụ kiện',
            price: 6990000,
            quantity: 0,
            description: 'Tai nghe không dây chống ồn'
        }
    ],

    defaultCategories: [
        { id: 1, name: 'Điện thoại', description: 'Các loại điện thoại thông minh' },
        { id: 2, name: 'Laptop', description: 'Máy tính xách tay' },
        { id: 3, name: 'Phụ kiện', description: 'Phụ kiện công nghệ' }
    ],

    // Get products from localStorage or return default
    getProducts() {
        const stored = localStorage.getItem('products');
        return stored ? JSON.parse(stored) : this.defaultProducts;
    },

    // Get categories from localStorage or return default
    getCategories() {
        const stored = localStorage.getItem('categories');
        return stored ? JSON.parse(stored) : this.defaultCategories;
    },

    // Save products to localStorage
    saveProducts(products) {
        localStorage.setItem('products', JSON.stringify(products));
    },

    // Save categories to localStorage
    saveCategories(categories) {
        localStorage.setItem('categories', JSON.stringify(categories));
    },

    // Initialize data if not exists
    init() {
        if (!localStorage.getItem('products')) {
            this.saveProducts(this.defaultProducts);
        }
        if (!localStorage.getItem('categories')) {
            this.saveCategories(this.defaultCategories);
        }
    }
};

// Initialize data on load
DataManager.init();