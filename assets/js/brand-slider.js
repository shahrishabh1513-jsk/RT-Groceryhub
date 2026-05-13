// ========== BRAND AUTO-SLIDER ==========
function initBrandSlider() {
    const container = document.getElementById('brand-slider');
    if (!container) return;
    
    // Duplicate brands for seamless loop
    const allBrands = [...brands, ...brands, ...brands];
    
    container.innerHTML = allBrands.map(brand => `
        <div class="brand-item">
            <div class="brand-logo-wrapper">
                <img src="${brand.logo}" alt="${brand.name}" 
                     onerror="this.src='https://via.placeholder.com/80?text=${brand.name.charAt(0)}'">
            </div>
            <p>${brand.name}</p>
        </div>
    `).join('');
}