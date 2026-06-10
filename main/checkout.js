import { products } from "../data/products.js";
import { cart } from "../data/cart.js";

let cartSummaryHTML = '';


cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        };
    });

    
    cartSummaryHTML += `
    <div class="cart-item-container">
        <div class="delivery-date">
            Várható szállítási dátum: Kedd, Június 21
        </div>

        <div class="cart-item-details-flex">
        <img class="product-image"
            src="${matchingProduct.image}">

        <div class="cart-item-details">
            <div class="product-name">
                ${matchingProduct.name}
            </div>
            <div class="product-price">
                ${matchingProduct.priceForint} Ft
            </div>
            <div class="product-quantity">
            <span>
                Mennyiség: <span>${cartItem.quantity}</span>
            </span>
            <span class="delete-quantity-link link-primary">
                Törlés
            </span>
            </div>
        </div>

        <div class="delivery-options">
            <div class="delivery-options-title">
                Válassz az alábbi kézbesítési lehetőségek közül:
            </div>
            <div class="delivery-option">
            <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
            <div>
                <div class="delivery-option-date">
                    Kedd, Június 21
                </div>
                <div class="delivery-option-price">
                    699 Ft
                </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
            <div>
                <div class="delivery-option-date">
                    Szerda, Június 15
                </div>
                <div class="delivery-option-price">
                    1599 Ft
                </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
            <div>
                <div class="delivery-option-date">
                    Hétfő, Június 13
                </div>
                <div class="delivery-option-price">
                    2499 Ft
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    `;
})

document.querySelector(".js-order-summary")
    .innerHTML = cartSummaryHTML;


