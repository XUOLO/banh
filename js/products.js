// Products Page Logic
let currentEditingProduct = null;
let filteredProducts = [];

const ProductsPage = {
    init() {
        this.loadData();
        this.render();
        this.updateCategoryOptions();
        this.setupEventListeners();
    },

    loadData() {
        filteredProducts = DataManager.getProducts();
        PaginationSystem.init(filteredProducts);
    },

    render() {
        const tbody = document.getElementById('products-table-body');
        tbody.innerHTML = '';

        // Get paginated products
        const paginatedProducts = PaginationSystem.getPaginatedItems();

        // Show message if no products
        if (paginatedProducts.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td colspan="6" class="px-6 py-8 text-center text-gray-500">
                    <div class="flex flex-col items-center">
                        <svg class="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4.5"></path>
                        </svg>
                        <p class="text-lg font-medium">Không tìm thấy sản phẩm nào</p>
                        <p class="text-sm">Thử thay đổi bộ lọc hoặc thêm sản phẩm mới</p>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
            return;
        }

        paginatedProducts.forEach(product => {
            const row = document.createElement('tr');
            row.className = 'hover:bg-gray-50 transition-colors';
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">${product.name}</div>
                    <div class="text-sm text-gray-500">${product.description}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.category}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${Utils.formatPrice(product.price)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.quantity}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.quantity > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                        ${product.quantity > 0 ? 'Còn hàng' : 'Hết hàng'}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onclick="editProduct(${product.id})" class="text-blue-600 hover:text-blue-900 mr-2 transition-colors">✏️ Sửa</button>
                    <button onclick="deleteProduct(${product.id})" class="text-red-600 hover:text-red-900 transition-colors">🗑️ Xóa</button>
                </td>
            `;
            tbody.appendChild(row);
        });

        PaginationSystem.updatePagination();
    },

    showForm() {
        currentEditingProduct = null;
        document.getElementById('product-modal-title').textContent = 'Thêm Sản Phẩm';
        document.getElementById('product-form').reset();
        this.updateCategoryOptions();
        document.getElementById('product-modal').classList.remove('hidden');
        document.getElementById('product-modal').classList.add('flex');
    },

    edit(id) {
        const products = DataManager.getProducts();
        currentEditingProduct = products.find(p => p.id === id);
        document.getElementById('product-modal-title').textContent = 'Chỉnh Sửa Sản Phẩm';
        
        document.getElementById('product-name').value = currentEditingProduct.name;
        document.getElementById('product-category').value = currentEditingProduct.category;
        document.getElementById('product-price').value = currentEditingProduct.price;
        document.getElementById('product-quantity').value = currentEditingProduct.quantity;
        document.getElementById('product-description').value = currentEditingProduct.description;
        
        this.updateCategoryOptions();
        document.getElementById('product-modal').classList.remove('hidden');
        document.getElementById('product-modal').classList.add('flex');
    },

    save(event) {
        event.preventDefault();
        
        const name = document.getElementById('product-name').value;
        const category = document.getElementById('product-category').value;
        const price = parseInt(document.getElementById('product-price').value);
        const quantity = parseInt(document.getElementById('product-quantity').value);
        const description = document.getElementById('product-description').value;

        const products = DataManager.getProducts();

        if (currentEditingProduct) {
            const index = products.findIndex(p => p.id === currentEditingProduct.id);
            products[index] = {
                ...currentEditingProduct,
                name,
                category,
                price,
                quantity,
                description
            };
        } else {
            const newProduct = {
                id: Date.now(),
                name,
                category,
                price,
                quantity,
                description
            };
            products.push(newProduct);
        }

        DataManager.saveProducts(products);
        this.closeModal();
        FilterSystem.apply();
        Utils.showToast('Sản phẩm đã được lưu thành công!', 'success');
    },

    delete(id) {
        const products = DataManager.getProducts();
        const product = products.find(p => p.id === id);
        
        ModalSystem.showConfirm(
            `Bạn có chắc chắn muốn xóa sản phẩm "${product.name}"?`,
            () => {
                const updatedProducts = products.filter(p => p.id !== id);
                DataManager.saveProducts(updatedProducts);
                ModalSystem.closeDelete();
                FilterSystem.apply();
                Utils.showToast('Sản phẩm đã được xóa!', 'success');
            }
        );
    },

    closeModal() {
        document.getElementById('product-modal').classList.add('hidden');
        document.getElementById('product-modal').classList.remove('flex');
    },

    updateCategoryOptions() {
        const categories = DataManager.getCategories();
        const selects = ['product-category', 'category-filter'];
        
        selects.forEach(selectId => {
            const select = document.getElementById(selectId);
            if (!select) return;
            
            const currentValue = select.value;
            
            // Clear existing options except first one
            while (select.children.length > 1) {
                select.removeChild(select.lastChild);
            }
            
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.name;
                option.textContent = category.name;
                select.appendChild(option);
            });
            
            select.value = currentValue;
        });
    },

    setupEventListeners() {
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const statusFilter = document.getElementById('status-filter');
        const priceFilter = document.getElementById('price-filter');

        if (searchInput) searchInput.addEventListener('input', Utils.debounce(FilterSystem.apply.bind(FilterSystem), 300));
        if (categoryFilter) categoryFilter.addEventListener('change', FilterSystem.apply.bind(FilterSystem));
        if (statusFilter) statusFilter.addEventListener('change', FilterSystem.apply.bind(FilterSystem));
        if (priceFilter) priceFilter.addEventListener('change', FilterSystem.apply.bind(FilterSystem));
    }
};

// Filter System
const FilterSystem = {
    apply() {
        const products = DataManager.getProducts();
        const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
        const categoryFilter = document.getElementById('category-filter')?.value || '';
        const statusFilter = document.getElementById('status-filter')?.value || '';
        const priceFilter = document.getElementById('price-filter')?.value || '';

        filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = !categoryFilter || product.category === categoryFilter;
            const matchesStatus = !statusFilter || 
                                (statusFilter === 'in-stock' && product.quantity > 0) ||
                                (statusFilter === 'out-of-stock' && product.quantity === 0);
            
            let matchesPrice = true;
            if (priceFilter) {
                const [min, max] = priceFilter.split('-').map(Number);
                matchesPrice = product.price >= min && product.price <= max;
            }

            return matchesSearch && matchesCategory && matchesStatus && matchesPrice;
        });

        // Reset to first page when filtering
        PaginationSystem.currentPage = 1;
        PaginationSystem.filteredItems = filteredProducts;
        ProductsPage.render();
    },

    clear() {
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const statusFilter = document.getElementById('status-filter');
        const priceFilter = document.getElementById('price-filter');

        if (searchInput) searchInput.value = '';
        if (categoryFilter) categoryFilter.value = '';
        if (statusFilter) statusFilter.value = '';
        if (priceFilter) priceFilter.value = '';
        
        filteredProducts = DataManager.getProducts();
        PaginationSystem.currentPage = 1;
        PaginationSystem.filteredItems = filteredProducts;
        ProductsPage.render();
    }
};

// Global functions for backward compatibility
function showProductForm() { ProductsPage.showForm(); }
function editProduct(id) { ProductsPage.edit(id); }
function saveProduct(event) { ProductsPage.save(event); }
function deleteProduct(id) { ProductsPage.delete(id); }
function closeProductModal() { ProductsPage.closeModal(); }
function applyFilters() { FilterSystem.apply(); }
function clearFilters() { FilterSystem.clear(); }

// Make ProductsPage available globally for pagination
window.ProductsPage = ProductsPage;