const PaginationSystem = {
    currentPage: 1,
    itemsPerPage: 5,
    totalPages: 1,
    filteredItems: [],

    init(items) {
        this.filteredItems = items;
        this.currentPage = 1;
        this.updatePagination();
    },

    updatePagination() {
        this.totalPages = Math.ceil(this.filteredItems.length / this.itemsPerPage);
        
        // Update info text
        const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endIndex = Math.min(this.currentPage * this.itemsPerPage, this.filteredItems.length);
        
        const showingFromEl = document.getElementById('showing-from');
        const showingToEl = document.getElementById('showing-to');
        const totalItemsEl = document.getElementById('total-items');
        
        if (showingFromEl) showingFromEl.textContent = this.filteredItems.length > 0 ? startIndex : 0;
        if (showingToEl) showingToEl.textContent = endIndex;
        if (totalItemsEl) totalItemsEl.textContent = this.filteredItems.length;
        
        // Update page numbers
        this.renderPageNumbers();
        
        // Update button states
        this.updateButtonStates();
    },

    renderPageNumbers() {
        const pageNumbersContainer = document.getElementById('page-numbers');
        if (!pageNumbersContainer) return;
        
        pageNumbersContainer.innerHTML = '';
        
        if (this.totalPages <= 1) return;
        
        // Calculate which pages to show
        let startPage = Math.max(1, this.currentPage - 2);
        let endPage = Math.min(this.totalPages, this.currentPage + 2);
        
        // Adjust if we're near the beginning or end
        if (this.currentPage <= 3) {
            endPage = Math.min(5, this.totalPages);
        }
        if (this.currentPage >= this.totalPages - 2) {
            startPage = Math.max(1, this.totalPages - 4);
        }
        
        // Add ellipsis at the beginning if needed
        if (startPage > 1) {
            this.createPageButton(1, pageNumbersContainer);
            if (startPage > 2) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                ellipsis.className = 'px-2 py-1 text-gray-500';
                pageNumbersContainer.appendChild(ellipsis);
            }
        }
        
        // Add page numbers
        for (let i = startPage; i <= endPage; i++) {
            this.createPageButton(i, pageNumbersContainer);
        }
        
        // Add ellipsis at the end if needed
        if (endPage < this.totalPages) {
            if (endPage < this.totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                ellipsis.className = 'px-2 py-1 text-gray-500';
                pageNumbersContainer.appendChild(ellipsis);
            }
            this.createPageButton(this.totalPages, pageNumbersContainer);
        }
    },

    createPageButton(pageNum, container) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.onclick = () => this.goToPage(pageNum);
        
        if (pageNum === this.currentPage) {
            button.className = 'px-3 py-1 text-sm bg-blue-600 text-white rounded font-medium';
        } else {
            button.className = 'px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors';
        }
        
        container.appendChild(button);
    },

    updateButtonStates() {
        const firstBtn = document.getElementById('first-page-btn');
        const prevBtn = document.getElementById('prev-page-btn');
        const nextBtn = document.getElementById('next-page-btn');
        const lastBtn = document.getElementById('last-page-btn');
        
        if (!firstBtn || !prevBtn || !nextBtn || !lastBtn) return;
        
        // Disable/enable buttons based on current page
        const isFirstPage = this.currentPage === 1;
        const isLastPage = this.currentPage === this.totalPages || this.totalPages === 0;
        
        firstBtn.disabled = isFirstPage;
        prevBtn.disabled = isFirstPage;
        nextBtn.disabled = isLastPage;
        lastBtn.disabled = isLastPage;
        
        // Update button appearance
        [firstBtn, prevBtn].forEach(btn => {
            if (isFirstPage) {
                btn.classList.add('opacity-50', 'cursor-not-allowed');
                btn.classList.remove('hover:bg-gray-200');
            } else {
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                btn.classList.add('hover:bg-gray-200');
            }
        });
        
        [nextBtn, lastBtn].forEach(btn => {
            if (isLastPage) {
                btn.classList.add('opacity-50', 'cursor-not-allowed');
                btn.classList.remove('hover:bg-gray-200');
            } else {
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                btn.classList.add('hover:bg-gray-200');
            }
        });
    },

    goToPage(page) {
        if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
            this.currentPage = page;
            // Trigger re-render of the current page
            if (window.ProductsPage && window.ProductsPage.render) {
                window.ProductsPage.render();
            }
        }
    },

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.goToPage(this.currentPage + 1);
        }
    },

    previousPage() {
        if (this.currentPage > 1) {
            this.goToPage(this.currentPage - 1);
        }
    },

    changeItemsPerPage(newItemsPerPage) {
        this.itemsPerPage = parseInt(newItemsPerPage);
        this.currentPage = 1; // Reset to first page
        // Trigger re-render of the current page
        if (window.ProductsPage && window.ProductsPage.render) {
            window.ProductsPage.render();
        }
    },

    getPaginatedItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.filteredItems.slice(startIndex, endIndex);
    }
};