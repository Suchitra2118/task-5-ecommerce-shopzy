/* =====================================================
   SHOPZY - E-COMMERCE WEBSITE
   SCRIPT.JS
===================================================== */


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "electronics",
        price: 1499,
        oldPrice: 2499,
        rating: 4.5,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 2,
        name: "Smart Watch Series 5",
        category: "electronics",
        price: 2199,
        oldPrice: 3999,
        rating: 4.4,
        reviews: 96,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 3,
        name: "Men's Casual Cotton Shirt",
        category: "fashion",
        price: 799,
        oldPrice: 1499,
        rating: 4.3,
        reviews: 214,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 4,
        name: "Women's Casual Handbag",
        category: "fashion",
        price: 999,
        oldPrice: 1899,
        rating: 4.6,
        reviews: 172,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 5,
        name: "Premium Basmati Rice 5kg",
        category: "grocery",
        price: 649,
        oldPrice: 799,
        rating: 4.7,
        reviews: 305,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 6,
        name: "Modern Table Lamp",
        category: "home",
        price: 899,
        oldPrice: 1399,
        rating: 4.4,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 7,
        name: "Skincare Beauty Set",
        category: "beauty",
        price: 749,
        oldPrice: 1199,
        rating: 4.5,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 8,
        name: "Classic Analog Wrist Watch",
        category: "accessories",
        price: 1299,
        oldPrice: 2299,
        rating: 4.6,
        reviews: 143,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 9,
        name: "Portable Bluetooth Speaker",
        category: "electronics",
        price: 1199,
        oldPrice: 1999,
        rating: 4.4,
        reviews: 118,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 10,
        name: "Comfortable Sports Shoes",
        category: "fashion",
        price: 1599,
        oldPrice: 2999,
        rating: 4.5,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 11,
        name: "Kitchen Storage Container Set",
        category: "home",
        price: 599,
        oldPrice: 999,
        rating: 4.3,
        reviews: 74,
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 12,
        name: "Stylish Sunglasses",
        category: "accessories",
        price: 499,
        oldPrice: 999,
        rating: 4.2,
        reviews: 91,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
    }

];


/* =====================================================
   VARIABLES
===================================================== */

let cart = JSON.parse(localStorage.getItem("shopzyCart")) || [];

let currentProducts = [...products];


/* =====================================================
   GET HTML ELEMENTS
===================================================== */

const productGrid = document.getElementById("productGrid");

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const sortProducts =
    document.getElementById("sortProducts");

const cartButton =
    document.getElementById("cartButton");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCartButton =
    document.getElementById("closeCartButton");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutButton =
    document.getElementById("checkoutButton");

const loginButton =
    document.getElementById("loginButton");

const loginModal =
    document.getElementById("loginModal");

const closeLogin =
    document.getElementById("closeLogin");

const loginForm =
    document.getElementById("loginForm");

const signupButton =
    document.getElementById("signupButton");

const shopNowButton =
    document.getElementById("shopNowButton");

const toast =
    document.getElementById("toast");


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(productList) {

    productGrid.innerHTML = "";

    if (productList.length === 0) {

        productGrid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px 20px;
                background:white;
                border-radius:10px;
            ">
                <i class="fa-solid fa-magnifying-glass"
                   style="font-size:40px;color:#c7b5d8;">
                </i>

                <h3 style="margin-top:15px;">
                    No products found
                </h3>

                <p style="margin-top:8px;color:#888;">
                    Try searching for something else.
                </p>
            </div>
        `;

        return;
    }


    productList.forEach(product => {

        const discount = Math.round(
            ((product.oldPrice - product.price) /
                product.oldPrice) * 100
        );


        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <span class="product-badge">
                    ${discount}% OFF
                </span>

                <button
                    class="wishlist-button"
                    data-id="${product.id}"
                    title="Add to wishlist"
                >
                    <i class="fa-regular fa-heart"></i>
                </button>

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>


                <div class="product-name">
                    ${product.name}
                </div>


                <div class="product-rating">

                    <span class="rating-box">
                        ${product.rating}
                        <i class="fa-solid fa-star"></i>
                    </span>

                    <span class="rating-count">
                        ${product.reviews} ratings
                    </span>

                </div>


                <div class="price-row">

                    <span class="current-price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </span>

                    <span class="old-price">
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </span>

                    <span class="discount">
                        ${discount}% off
                    </span>

                </div>


                <div class="delivery-info">

                    <i class="fa-solid fa-truck-fast"></i>

                    Free delivery

                </div>


                <div class="product-actions">

                    <button
                        class="add-cart-button"
                        data-id="${product.id}"
                    >
                        <i class="fa-solid fa-cart-plus"></i>
                        Add to Cart
                    </button>

                    <button
                        class="buy-button"
                        data-id="${product.id}"
                    >
                        Buy Now
                    </button>

                </div>

            </div>

        `;


        productGrid.appendChild(card);

    });


    attachProductEvents();

}


/* =====================================================
   PRODUCT BUTTON EVENTS
===================================================== */

function attachProductEvents() {

    /* ADD TO CART */

    document
        .querySelectorAll(".add-cart-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                addToCart(id);

            });

        });


    /* BUY NOW */

    document
        .querySelectorAll(".buy-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                addToCart(id);

                openCart();

            });

        });


    /* WISHLIST */

    document
        .querySelectorAll(".wishlist-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                button.classList.toggle("liked");

                const icon =
                    button.querySelector("i");

                if (button.classList.contains("liked")) {

                    icon.classList.remove(
                        "fa-regular"
                    );

                    icon.classList.add(
                        "fa-solid"
                    );

                    showToast(
                        "Added to wishlist ❤️"
                    );

                } else {

                    icon.classList.remove(
                        "fa-solid"
                    );

                    icon.classList.add(
                        "fa-regular"
                    );

                    showToast(
                        "Removed from wishlist"
                    );

                }

            });

        });

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });

    }


    saveCart();

    updateCart();

    showToast(
        `${product.name} added to cart`
    );

}


/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {

    localStorage.setItem(
        "shopzyCart",
        JSON.stringify(cart)
    );

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <h3>Your cart is empty</h3>

                <p>
                    Add products to your cart.
                </p>

            </div>

        `;

        cartCount.textContent = "0";

        cartTotal.textContent = "₹0";

        return;

    }


    let total = 0;

    let totalQuantity = 0;


    cart.forEach(cartProduct => {

        const product =
            products.find(
                item => item.id === cartProduct.id
            );

        if (!product) return;


        const itemTotal =
            product.price * cartProduct.quantity;

        total += itemTotal;

        totalQuantity += cartProduct.quantity;


        const item =
            document.createElement("div");

        item.className = "cart-item";


        item.innerHTML = `

            <img
                class="cart-item-image"
                src="${product.image}"
                alt="${product.name}"
            >


            <div class="cart-item-info">

                <h4>
                    ${product.name}
                </h4>

                <div class="cart-item-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </div>


                <div class="quantity-controls">

                    <button
                        class="decrease-btn"
                        data-id="${product.id}"
                    >
                        −
                    </button>

                    <span>
                        ${cartProduct.quantity}
                    </span>

                    <button
                        class="increase-btn"
                        data-id="${product.id}"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                class="remove-cart-item"
                data-id="${product.id}"
                title="Remove"
            >
                <i class="fa-solid fa-trash"></i>
            </button>

        `;


        cartItems.appendChild(item);

    });


    cartCount.textContent =
        totalQuantity;


    cartTotal.textContent =
        `₹${total.toLocaleString("en-IN")}`;


    attachCartEvents();

}


/* =====================================================
   CART EVENTS
===================================================== */

function attachCartEvents() {


    /* INCREASE */

    document
        .querySelectorAll(".increase-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                const item =
                    cart.find(
                        product => product.id === id
                    );

                if (item) {

                    item.quantity++;

                    saveCart();

                    updateCart();

                }

            });

        });


    /* DECREASE */

    document
        .querySelectorAll(".decrease-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                const item =
                    cart.find(
                        product => product.id === id
                    );

                if (!item) return;


                item.quantity--;


                if (item.quantity <= 0) {

                    cart =
                        cart.filter(
                            product => product.id !== id
                        );

                }


                saveCart();

                updateCart();

            });

        });


    /* REMOVE */

    document
        .querySelectorAll(".remove-cart-item")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);


                cart =
                    cart.filter(
                        product => product.id !== id
                    );


                saveCart();

                updateCart();

                showToast(
                    "Product removed from cart"
                );

            });

        });

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    cartSidebar.classList.add("active");

    cartOverlay.classList.add("active");

}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

}


/* =====================================================
   CART BUTTON
===================================================== */

cartButton.addEventListener(
    "click",
    openCart
);


closeCartButton.addEventListener(
    "click",
    closeCart
);


cartOverlay.addEventListener(
    "click",
    closeCart
);


/* =====================================================
   SEARCH
===================================================== */

function searchProducts() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    currentProducts =
        products.filter(product => {

            return (
                product.name
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                product.category
                    .toLowerCase()
                    .includes(searchTerm)
            );

        });


    displayProducts(currentProducts);

}


/* SEARCH BUTTON */

searchButton.addEventListener(
    "click",
    searchProducts
);


/* ENTER KEY */

searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            searchProducts();

        }

    }
);


/* LIVE SEARCH */

searchInput.addEventListener(
    "input",
    () => {

        searchProducts();

    }
);


/* =====================================================
   CATEGORY FILTER
===================================================== */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categoryButtons.forEach(
                item =>
                    item.classList.remove("active")
            );


            button.classList.add("active");


            const category =
                button.dataset.category;


            if (category === "all") {

                currentProducts =
                    [...products];

            } else {

                currentProducts =
                    products.filter(
                        product =>
                            product.category === category
                    );

            }


            displayProducts(
                currentProducts
            );


            /* Clear search */

            searchInput.value = "";

        }
    );

});


/* =====================================================
   SORT PRODUCTS
===================================================== */

sortProducts.addEventListener(
    "change",
    () => {

        const value =
            sortProducts.value;


        let sorted =
            [...currentProducts];


        if (value === "low") {

            sorted.sort(
                (a, b) =>
                    a.price - b.price
            );

        }


        if (value === "high") {

            sorted.sort(
                (a, b) =>
                    b.price - a.price
            );

        }


        if (value === "rating") {

            sorted.sort(
                (a, b) =>
                    b.rating - a.rating
            );

        }


        displayProducts(sorted);

    }
);


/* =====================================================
   SHOP NOW BUTTON
===================================================== */

shopNowButton.addEventListener(
    "click",
    () => {

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =====================================================
   LOGIN MODAL
===================================================== */

loginButton.addEventListener(
    "click",
    () => {

        loginModal.classList.add("active");

    }
);


closeLogin.addEventListener(
    "click",
    () => {

        loginModal.classList.remove(
            "active"
        );

    }
);


/* CLICK OUTSIDE LOGIN */

loginModal.addEventListener(
    "click",
    event => {

        if (
            event.target === loginModal
        ) {

            loginModal.classList.remove(
                "active"
            );

        }

    }
);


/* =====================================================
   LOGIN FORM
===================================================== */

loginForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const email =
            document.getElementById("email")
                .value.trim();


        const password =
            document.getElementById("password")
                .value.trim();


        if (!email || !password) {

            showToast(
                "Please enter your details"
            );

            return;

        }


        showToast(
            "Login successful! Welcome to Shopzy 🎉"
        );


        loginModal.classList.remove(
            "active"
        );


        loginForm.reset();

    }
);


/* =====================================================
   SIGNUP
===================================================== */

signupButton.addEventListener(
    "click",
    () => {

        showToast(
            "Signup feature selected"
        );

    }
);


/* =====================================================
   CHECKOUT
===================================================== */

checkoutButton.addEventListener(
    "click",
    () => {

        if (cart.length === 0) {

            showToast(
                "Your cart is empty"
            );

            return;

        }


        showToast(
            "Proceeding to checkout..."
        );

    }
);


/* =====================================================
   TOAST MESSAGE
===================================================== */

let toastTimer;


function showToast(message) {

    const toastText =
        toast.querySelector("span");


    toastText.textContent =
        message;


    toast.classList.add("active");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "active"
                );

            },
            2500
        );

}


/* =====================================================
   INITIAL LOAD
===================================================== */

displayProducts(products);

updateCart();