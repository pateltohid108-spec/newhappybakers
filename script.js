

// ============================================
// CONFIGURATION
// ============================================
// Your WhatsApp number (include country code, no + or spaces)
var WHATSAPP_NUMBER = "919824483686";

// ============================================
// WHATSAPP ORDER BUTTONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Get all order buttons
    var orderButtons = document.querySelectorAll('.btn-order');
    
    // Add click event to each button
    for (var i = 0; i < orderButtons.length; i++) {
        orderButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get item name and price from data attributes
            var itemName = this.getAttribute('data-item');
            var itemPrice = this.getAttribute('data-price');
            if (!itemPrice) {
                itemPrice = 'Please check';
            }
            
           var message = 
`🛍️ *New Order - New Happy Baker's*

📌 Item: ${itemName}
💰 Price: ${itemPrice}

Thank you!`;

var encodedMessage = encodeURIComponent(message);

var whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodedMessage;

window.location.href = whatsappUrl;
        });
    }
	
    
    // ============================================
    // ORDER FORM SUBMISSION
    // ============================================
    
    var orderForm = document.getElementById('orderForm');
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var name = document.getElementById('name').value;
            var phone = document.getElementById('phone').value;
            var cakeType = document.getElementById('cakeType').value;
            var message = document.getElementById('message').value;
            
            if (!phone) {
                alert('Please enter your phone number');
                return;
            }
            
           var formMessage =
`🧁 *New Order - New Happy Baker's*

👤 Customer Name: ${name}
📞 Phone: ${phone}
🎂 Cake Type: ${cakeType}
📝 Message:
${message || 'No additional details'}

Please confirm my order. Thank you!`;

var encodedFormMessage = encodeURIComponent(formMessage);

var formWhatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodedFormMessage;

window.location.href = whatsappUrl;
        });
    }
    
    // ============================================
    // CATEGORY FILTER
    // ============================================
    
    var filterButtons = document.querySelectorAll('.filter-btn');
    var bakeryItems = document.querySelectorAll('.bakery-item');
    
    for (var j = 0; j < filterButtons.length; j++) {
        filterButtons[j].addEventListener('click', function() {
            // Remove active class from all buttons
            for (var k = 0; k < filterButtons.length; k++) {
                filterButtons[k].classList.remove('active');
            }
            
            // Add active class to clicked button
            this.classList.add('active');
            
            var filterValue = this.getAttribute('data-filter');
            
            for (var m = 0; m < bakeryItems.length; m++) {
                var itemCategory = bakeryItems[m].getAttribute('data-category');
                
               if (itemCategory === filterValue) {
                      bakeryItems[m].classList.remove('hide');
                      bakeryItems[m].classList.add('show');
                    } 
			   else {
                      bakeryItems[m].classList.remove('show');
                      bakeryItems[m].classList.add('hide');
                    }
            }
        });
    }
    
    // ============================================
    // MOBILE NAVIGATION
    // ============================================
    
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            var icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-times');
            }
        });
        
        var navLinksArray = document.querySelectorAll('.nav-links a');
        for (var n = 0; n < navLinksArray.length; n++) {
            navLinksArray[n].addEventListener('click', function() {
                navLinks.classList.remove('active');
                var icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                }
            });
        }
    }
});

// ============================================
// MOBILE NAVIGATION - HAMBURGER MENU
// ============================================

var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Toggle hamburger icon between bars and times
        var icon = this.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
    
    // Close menu when clicking any navigation link
    var navLinksArray = document.querySelectorAll('.nav-links a');
    for (var n = 0; n < navLinksArray.length; n++) {
        navLinksArray[n].addEventListener('click', function() {
            navLinks.classList.remove('active');
            
            // Reset hamburger icon
            if (hamburger) {
                var icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            
            // Reset hamburger icon
            if (hamburger) {
                var icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
}

// ============================================
// WHATSAPP ORDER BUTTONS - INCLUDES TODAY'S SPECIAL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    var orderButtons = document.querySelectorAll('.btn-order, .btn-order-special');
    
    for (var i = 0; i < orderButtons.length; i++) {
        orderButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            
            var itemName = this.getAttribute('data-item');
            var itemPrice = this.getAttribute('data-price') || 'Please check';
            
            // Proper formatted message (NO %0A)
            var message = 
`🛍️ *New Order - New Happy Baker's*

📌 Item: ${itemName}
💰 Price: ${itemPrice}

Thank you!`;
            
            var encodedMessage = encodeURIComponent(message);
            
            var whatsappUrl = 
                'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodedMessage;
            
          window.location.href = whatsappUrl;
        });
    }
    
    // ... rest of your existing code (filter, form, nav) ...
});




// ============================================
// FOOTER CATEGORY LINKS - AUTO FILTER
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Get all footer category links
    var footerCategoryLinks = document.querySelectorAll('.footer-column ul li a[data-filter]');
    
    // Add click event to each footer category link
    for (var i = 0; i < footerCategoryLinks.length; i++) {
        footerCategoryLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the filter value from data attribute
            var filterValue = this.getAttribute('data-filter');
            
            // Scroll to bakery items section
            var bakerySection = document.getElementById('bakery-items');
            if (bakerySection) {
                bakerySection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Wait for scroll to complete, then activate filter
            setTimeout(function() {
                // Find and click the corresponding filter button
                var filterButtons = document.querySelectorAll('.filter-btn');
                for (var j = 0; j < filterButtons.length; j++) {
                    if (filterButtons[j].getAttribute('data-filter') === filterValue) {
                        // Remove active class from all buttons
                        filterButtons.forEach(function(btn) {
                            btn.classList.remove('active');
                        });
                        
                        // Add active class to clicked button
                        filterButtons[j].classList.add('active');
                        
                        // Trigger filter functionality
                        var bakeryItems = document.querySelectorAll('.bakery-item');
                        for (var k = 0; k < bakeryItems.length; k++) {
                            var itemCategory = bakeryItems[k].getAttribute('data-category');
                            
                            if (filterValue === 'all' || itemCategory === filterValue) {
                                bakeryItems[k].classList.remove('hide');
                                bakeryItems[k].classList.add('show');
                            } else {
                                bakeryItems[k].classList.remove('show');
                                bakeryItems[k].classList.add('hide');
                            }
                        }
                        
                        break;
                    }
                }
            }, 500); // Wait 500ms for smooth scroll
        });
    }
});

// ============================================
// MENU SEARCH FUNCTIONALITY
// ============================================

// Get search elements
const searchInput = document.getElementById('menuSearch');
const clearSearchBtn = document.getElementById('clearSearch');
const searchResultsCount = document.getElementById('searchResultsCount');
const bakeryItems = document.querySelectorAll('.bakery-item');
const filterButtons = document.querySelectorAll('.filter-btn');

// Current search term
let currentSearchTerm = '';

// Search function
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    currentSearchTerm = searchTerm;
    
    // Show/hide clear button
    if (searchTerm.length > 0) {
        clearSearchBtn.style.display = 'flex';
    } else {
        clearSearchBtn.style.display = 'none';
    }
    
    // Get current active filter
    let activeFilter = 'all';
    filterButtons.forEach(btn => {
        if (btn.classList.contains('active')) {
            activeFilter = btn.getAttribute('data-filter');
        }
    });
    
    // Filter items based on search AND category
    let visibleCount = 0;
    
    bakeryItems.forEach(item => {
        const itemName = item.querySelector('h3')?.textContent.toLowerCase() || '';
        const itemCategory = item.getAttribute('data-category');
        
        // Check if item matches search term
        const matchesSearch = searchTerm === '' || itemName.includes(searchTerm);
        
        // Check if item matches category filter
        const matchesCategory = activeFilter === 'all' || itemCategory === activeFilter;
        
        // Show/hide based on both conditions
        if (matchesSearch && matchesCategory) {
            item.classList.remove('hide');
            item.classList.add('show');
            visibleCount++;
        } else {
            item.classList.remove('show');
            item.classList.add('hide');
        }
    });
    
    // Update results count
    if (searchResultsCount) {
        searchResultsCount.textContent = `Showing ${visibleCount} of ${bakeryItems.length} items`;
        searchResultsCount.classList.add('show');
    }
}

// Clear search function
function clearSearch() {
    searchInput.value = '';
    currentSearchTerm = '';
    clearSearchBtn.style.display = 'none';
    performSearch();
}

// Event Listeners for Search
if (searchInput) {
    // Real-time search on input
    searchInput.addEventListener('input', performSearch);
    
    // Clear search on button click
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', clearSearch);
    }
    
    // Clear search on ESC key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            clearSearch();
            searchInput.blur();
        }
    });
}

// ============================================
// CATEGORY FILTER (Updated to work with search)
// ============================================

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Perform search with new filter
        performSearch();
    });
});

// ============================================
// GALLERY LIGHTBOX FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Get all gallery items
    var galleryItems = document.querySelectorAll('.gallery-item');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxClose = document.querySelector('.lightbox-close');
    
    // Add click event to each gallery item
    for (var i = 0; i < galleryItems.length; i++) {
        galleryItems[i].addEventListener('click', function() {
            // Get the full-size image URL from data attribute
            var fullImage = this.getAttribute('data-image');
            
            // Set the lightbox image
            lightboxImg.src = fullImage;
            
            // Show lightbox
            lightbox.classList.add('active');
        });
    }
    
    // Close lightbox when clicking close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function() {
            lightbox.classList.remove('active');
        });
    }
    
    // Close lightbox when clicking outside image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
    
    // Close lightbox with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });
});

// ============================================
// CAKE CUSTOMIZATION FORM
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Custom Cake Form Submission
    var customCakeForm = document.getElementById('customCakeForm');
    
    if (customCakeForm) {
        customCakeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            var flavor = document.getElementById('cakeFlavor').value;
            var size = document.getElementById('cakeSize').value;
            var theme = document.getElementById('cakeTheme').value;
            var deliveryDate = document.getElementById('deliveryDate').value;
            var details = document.getElementById('customDetails').value;
            var imageInput = document.getElementById('cakeImage');
            
            // Validate required fields
            if (!flavor || !size || !theme || !deliveryDate) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Create WhatsApp message using template string with \n for line breaks
            var message = `🎂 *Custom Cake Order - New Happy Baker's*

🍰 *Flavor:* ${flavor}
⚖️ *Size:* ${size}
🎨 *Theme:* ${theme}
📅 *Delivery Date:* ${deliveryDate}`;
            
            // Add details if provided
            if (details) {
                message = message + `\n\n📝 *Message:*
${details}`;
            }
            
           // Add image note if file selected
            if (imageInput.files.length > 0) {
                message = message + `\n\n📷 I will send the reference photo in the next message.`;
            }
            
			
            // Add closing
            message = message + `\n\n*Thank you!*`;
            
            // Encode message for URL (only once)
            var encodedMessage = encodeURIComponent(message);
            
            // Create WhatsApp URL
            var whatsappUrl = `https://wa.me/919824483686?text=${encodedMessage}`;
            
            // Open WhatsApp in new tab
           window.location.href = whatsappUrl;
            
            // Reset form
            customCakeForm.reset();
        });
    }
});


// ============================================
// NEW HAPPY BAKER'S - MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // SHOPPING CART FUNCTIONALITY
    // ============================================
    
    // Cart State - Initialize empty array
    let cart = [];
    const WHATSAPP_NUMBER = "919824483686";
    
    // DOM Elements - Get elements safely
    const cartBadge = document.getElementById('cartBadge');
    const cartIcon = document.getElementById('cartIcon');
    const cartPanel = document.getElementById('cartPanel');
    const cartClose = document.getElementById('cartClose');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const whatsappOrderBtn = document.getElementById('whatsappOrder');
    const cartOverlay = document.getElementById('cartOverlay');
    const addCartButtons = document.querySelectorAll('.btn-add-cart');
	
	// NEW: Get notification element
    const cartNotification = document.getElementById('cartNotification');
    
    // ============================================
    // CART DISPLAY FUNCTIONS
    // ============================================
    
    // Update Cart Badge
    function updateCartBadge() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartBadge) {
            cartBadge.textContent = totalItems;
        }
    }
    
    // Render Cart Items - FIXED: Always called after cart changes
    function renderCartItems() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Your cart is empty</p>
                    <small>Add items from the menu to get started</small>
                </div>
            `;
            if (cartTotal) {
                cartTotal.textContent = '0';
            }
            return;
        }
        
        let html = '';
        let totalItems = 0;
        
        cart.forEach((item, index) => {
            totalItems += item.quantity;
            html += `
                <div class="cart-item" data-item-index="${index}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>${item.price}</p>
                    </div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" data-action="decrease" data-item-name="${item.name}">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" data-action="increase" data-item-name="${item.name}">+</button>
                        <button class="remove-item" data-item-name="${item.name}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        cartItemsContainer.innerHTML = html;
        if (cartTotal) {
            cartTotal.textContent = totalItems;
        }
    }
	
	 // NEW: Show notification popup
    function showNotification() {
        if (cartNotification) {
            // Reset animation
            cartNotification.classList.remove('hide');
            cartNotification.classList.add('show');
            
            // Hide after 2 seconds
            setTimeout(() => {
                cartNotification.classList.remove('show');
                cartNotification.classList.add('hide');
                
                // Remove from DOM after animation completes
                setTimeout(() => {
                    cartNotification.classList.remove('hide');
                }, 300);
            }, 2000);
        }
    }
    
    // Toggle Cart Panel
    function toggleCartPanel() {
        if (cartPanel) {
            cartPanel.classList.toggle('active');
            if (cartOverlay) {
                cartOverlay.classList.toggle('active');
            }
            // Render items when panel opens
            renderCartItems();
        }
    }
    
    // Close Cart Panel
    function closeCartPanel() {
        if (cartPanel) {
            cartPanel.classList.remove('active');
        }
        if (cartOverlay) {
            cartOverlay.classList.remove('active');
        }
    }
    
    // ============================================
    // CART OPERATIONS
    // ============================================
    
    // Add to Cart
    addCartButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');
            const itemPrice = this.getAttribute('data-price');
            
            // Validate data attributes
            if (!itemName || !itemPrice) {
                console.error('Missing data-item or data-price attribute');
                return;
            }
            
            // Check if item already in cart
            const existingItem = cart.find(item => item.name === itemName);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    name: itemName,
                    price: itemPrice,
                    quantity: 1
                });
            }
            
            // Update cart badge
            updateCartBadge();
            
            // Render cart items
            renderCartItems();
			
			
			// Auto open cart panel
            toggleCartPanel();
			
			// Cart icon shake animation
            cartIcon.classList.add("shake");

           setTimeout(function(){
           cartIcon.classList.remove("shake");
           },400);
			
			 // NEW: Show notification popup
            showNotification();
            
            // Show feedback
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Added';
            btn.style.background = '#25D366';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 1000);
        });
    });
    
    // Remove Item from Cart
    window.removeItemFromCart = function(itemName) {
        const index = cart.findIndex(item => item.name === itemName);
        if (index !== -1) {
            cart.splice(index, 1);
            updateCartBadge();
            renderCartItems();
        }
    };
    
    // Update Item Quantity
    window.updateItemQuantity = function(itemName, change) {
        const item = cart.find(item => item.name === itemName);
        if (item) {
            item.quantity += change;
            
            if (item.quantity <= 0) {
                cart = cart.filter(i => i.name !== itemName);
            }
            
            updateCartBadge();
            renderCartItems();
        }
    };
    
    // ============================================
    // CART PANEL EVENT LISTENERS
    // ============================================
    
    // Toggle cart panel on icon click
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            toggleCartPanel();
        });
    }
    
    // Close cart panel on close button click
    if (cartClose) {
        cartClose.addEventListener('click', function() {
            closeCartPanel();
        });
    }
    
    // Close cart panel on overlay click
    if (cartOverlay) {
        cartOverlay.addEventListener('click', function() {
            closeCartPanel();
        });
    }
    
    // ============================================
    // CART ITEM QUANTITY BUTTONS
    // ============================================
    
    // Event delegation for cart item buttons
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', function(e) {
            const target = e.target;
            
            // Increase quantity
            if (target.classList.contains('qty-btn') && target.dataset.action === 'increase') {
                const itemName = target.dataset.itemName;
                updateItemQuantity(itemName, 1);
            }
            
            // Decrease quantity
            if (target.classList.contains('qty-btn') && target.dataset.action === 'decrease') {
                const itemName = target.dataset.itemName;
                updateItemQuantity(itemName, -1);
            }
            
            // Remove item
            if (target.classList.contains('remove-item') || target.closest('.remove-item')) {
                const itemName = target.closest('.remove-item').dataset.itemName;
                removeItemFromCart(itemName);
            }
        });
    }
    
   // Close cart panel on WhatsApp order
   
if (whatsappOrderBtn) {
    whatsappOrderBtn.addEventListener('click', function(e) { 
	
    e.preventDefault();
    e.stopPropagation();

    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

// Build WhatsApp message
// Calculate totals
let totalItems = 0;
let totalPrice = 0;

// Start message
let message = `🧁 *NEW HAPPY BAKER'S*
━━━━━━━━━━━━━━━━

🛒 *New Order Request*

`;

// Add items
cart.forEach((item, index) => {

    const price = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
    const itemTotal = price * item.quantity;

    totalItems += item.quantity;
    totalPrice += itemTotal;

    message += `${index + 1}. 🍰 *${item.name}*\n`;
    message += `   Qty: ${item.quantity}\n`;
    message += `   Price: ₹${price}\n`;
    message += `   Subtotal: ₹${itemTotal}\n\n`;
});

// Order summary
message += `━━━━━━━━━━━━━━━━
📦 *ORDER SUMMARY*

Total Items: ${totalItems}
Total Price: ₹${totalPrice}

📍 Ordered from Website
Thank you for choosing *New Happy Baker's*! 😊
`;

        // Encode message once
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open WhatsApp
     window.open(whatsappUrl, "_blank");

        // Clear cart after order
        cart = [];
        updateCartBadge();
        renderCartItems();
        closeCartPanel();
    });
}
    
    // ============================================
    // CATEGORY FILTER
    // ============================================
    
    var filterButtons = document.querySelectorAll('.filter-btn');
    var bakeryItems = document.querySelectorAll('.bakery-item');
    
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            
            var filterValue = this.getAttribute('data-filter');
            
            bakeryItems.forEach(function(item) {
                var itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });
    
    // ============================================
    // MOBILE NAVIGATION
    // ============================================
    
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            var icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-times');
            }
        });
        
        var navLinksArray = document.querySelectorAll('.nav-links a');
        for (var n = 0; n < navLinksArray.length; n++) {
            navLinksArray[n].addEventListener('click', function() {
                navLinks.classList.remove('active');
                var icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                }
            });
        }
    }
    
    // ============================================
    // GALLERY LIGHTBOX
    // ============================================
    
    var galleryItems = document.querySelectorAll('.gallery-item');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxClose = document.querySelector('.lightbox-close');
    
    for (var i = 0; i < galleryItems.length; i++) {
        galleryItems[i].addEventListener('click', function() {
            var fullImage = this.getAttribute('data-image');
            lightboxImg.src = fullImage;
            lightbox.classList.add('active');
        });
    }
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function() {
            lightbox.classList.remove('active');
        });
    }
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });
    
    // ============================================
    // ORDER BUTTONS (Individual WhatsApp)
    // ============================================
    
    var orderButtons = document.querySelectorAll('.btn-order, .btn-order-special');
    
    for (var i = 0; i < orderButtons.length; i++) {
        orderButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            
            var itemName = this.getAttribute('data-item');
            var itemPrice = this.getAttribute('data-price');
            if (!itemPrice) {
                itemPrice = 'Please check';
            }
            
            // Use template string with \n for line breaks
            var message = `🛍️ *New Order - New Happy Baker's*

📌 Item: ${itemName}
💰 Price: ${itemPrice}

Thank you!`;
            
            // Encode message only once
            var encodedMessage = encodeURIComponent(message);
            var whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodedMessage;
            
            window.location.href = whatsappUrl;
        });
    }
    
    // ============================================
    // ORDER FORM SUBMISSION
    // ============================================
    
    var orderForm = document.getElementById('orderForm');
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var name = document.getElementById('name').value;
            var phone = document.getElementById('phone').value;
            var cakeType = document.getElementById('cakeType').value;
            var message = document.getElementById('message').value;
            
            if (!phone) {
                alert('Please enter your phone number');
                return;
            }
            
            // Use template string with \n for line breaks
            var formMessage = `🛍️ *New Order - New Happy Baker's*

👤 Customer Name: ${name}
📞 Phone: ${phone}
🎂 Cake Type: ${cakeType}

📝 Message:
${message || 'No additional details'}

Thank you!`;
            
            // Encode message only once
            var encodedFormMessage = encodeURIComponent(formMessage);
            var formWhatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodedFormMessage;
			
            // Mobile friendly
              window.location.href = formWhatsappUrl;
			  orderForm.reset();
        });
    }
	
// ============================================
// CLEAR ORDER FORM ON PAGE LOAD
// ============================================

window.addEventListener("load", function(){
    var form = document.getElementById("orderForm");
    if(form){
        form.reset();
    }
});
    
    // ============================================
    // CUSTOM CAKE FORM SUBMISSION
    // ============================================
    
    var customCakeForm = document.getElementById('customCakeForm');
    
    if (customCakeForm) {
        customCakeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var flavor = document.getElementById('cakeFlavor').value;
            var size = document.getElementById('cakeSize').value;
            var theme = document.getElementById('cakeTheme').value;
            var deliveryDate = document.getElementById('deliveryDate').value;
            var details = document.getElementById('customDetails').value;
            var imageInput = document.getElementById('cakeImage');
            
            if (!flavor || !size || !theme || !deliveryDate) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Use template string with \n for line breaks
            var message = `🎂 *Custom Cake Order - New Happy Baker's*

🍰 *Flavor:* ${flavor}
⚖️ *Size:* ${size}
🎨 *Theme:* ${theme}
📅 *Delivery Date:* ${deliveryDate}`;
            
            if (details) {
                message = message + `\n\n📝 *Message:*
${details}`;
            }
            
            if (imageInput.files.length > 0) {
                message = message + `\n\n📷 I will send the reference photo in the next message.`;
            }
            
            message = message + `\n\n*Thank you!*`;
            
            // Encode message only once
            var encodedMessage = encodeURIComponent(message);
            var whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
            customCakeForm.reset();
        });
    }
    
    // ============================================
    // REVIEW FORM SUBMISSION
    // ============================================
    
    var reviewForm = document.getElementById('reviewForm');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var name = document.getElementById('reviewName').value.trim();
            var rating = document.getElementById('selectedRating').value;
            var message = document.getElementById('reviewMessage').value.trim();
            
            if (!name || !rating || !message) {
                alert('Please fill in all fields and select a rating');
                return;
            }
            
            var starString = '';
            for (let i = 0; i < rating; i++) {
                starString += '⭐';
            }
            
            // Use template string with \n for line breaks
            var reviewMessage = `⭐ *New Customer Review*

👤 Name: ${name}
⭐ Rating: ${starString}

📝 Message: ${message}

Thank you!`;
            
            // Encode message only once
            var encodedReviewMessage = encodeURIComponent(reviewMessage);
            var whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodedReviewMessage;
            
            window.open(whatsappUrl, '_blank');
            reviewForm.reset();
        });
    }
    
    // ============================================
    // SCROLL TO TOP BUTTON
    // ============================================
    
    var scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            
            if (targetId !== '#' && targetId.length > 1) {
                e.preventDefault();
                var targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
    
    // ============================================
    // END OF DOMContentLoaded
    // ============================================
});


