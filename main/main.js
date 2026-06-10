import { products } from "../data/products.js"
import { cart, addToCart } from "../data/cart.js";


let productsHTML = "";


products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>
        <div class="product-rating-container">
            <div class="product-rating-stars">
                ${getStarsHTML(product.rating.stars)}
            </div>

            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
        </div>
      <div class="product-price">
        ${product.priceForint} Ft
      </div>

      <div class="product-quantity-container">
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div class="added-message js-added-message">
        <i class="fa-solid fa-circle-check"></i>
        Hozzáadva
      </div>
      

      <div class="product-spacer"></div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Kosárba
      </button>
    </div>
  `;
});

document.querySelector(".js-products-grid")
  .innerHTML = productsHTML;

function getStarsHTML(rating) {
  let starsHTML = '';

  for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        starsHTML += `<i class="fa-solid fa-star"></i>`;
      } else if (i === Math.floor(rating) + 1 && rating % 1  !== 0) {
        starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
      } else {
        starsHTML += `<i class="fa-regular fa-star"></i>`;
      }
    }


  return starsHTML;
}

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  })

  document.querySelector(".js-cart-quantity")
    .innerHTML = cartQuantity;
}

document.querySelectorAll(".js-add-to-cart")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;

      addToCart(productId);
      updateCartQuantity();
      
      


      const message = document.querySelector(".js-added-message");

      message.classList.add("show");

      setTimeout(() => {
        message.classList.remove("show");
      }, 2000);
    });
  });
