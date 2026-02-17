
document.addEventListener('DOMContentLoaded', () => {
    initFilter();
});

function initFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');
    const searchInput = document.getElementById('product-search');

    if (!filterBtns.length || !products.length) return;

    // Category Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');

            const category = btn.dataset.filter;
            filterProducts(category, searchInput ? searchInput.value : '');
        });
    });

    // Search Filtering
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeBtn = document.querySelector('.filter-btn.active');
            const category = activeBtn ? activeBtn.dataset.filter : 'all';
            filterProducts(category, e.target.value);
        });
    }

    function filterProducts(category, searchTerm) {
        const term = searchTerm.toLowerCase();

        products.forEach(product => {
            const productCategory = product.dataset.category;
            const title = product.querySelector('h3').textContent.toLowerCase();
            const desc = product.querySelector('p').textContent.toLowerCase();

            const matchesCategory = category === 'all' || productCategory === category;
            const matchesSearch = title.includes(term) || desc.includes(term);

            if (matchesCategory && matchesSearch) {
                product.classList.remove('hidden');
                // Trigger animation if re-appearing
                product.style.animation = 'none';
                product.offsetHeight; /* trigger reflow */
                product.style.animation = 'fadeIn 0.5s ease-out forwards';
            } else {
                product.classList.add('hidden');
            }
        });
    }
}
