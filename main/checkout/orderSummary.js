import { products, getProduct } from "../../data/products.js";
import { cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";


export function renderOrderSummary() {
    let cartSummaryHTML = '';

    

    cart.forEach((cartItem) => {
        const productId = cartItem.productId;

        const matchingProduct = getProduct(productId);

        const deliveryOptionId = cartItem.deliveryOptionId;

        const deliveryOption = getDeliveryOption(deliveryOptionId);


        const today = dayjs();
        const deliveryDate = today.add(
            deliveryOption.deliveryDays, "days"
        );
        const dateString = deliveryDate.locale("hu").format(
            "dddd, MMMM D"
        );


        
        cartSummaryHTML += `
        <div class="cart-item-container js-cart-item-conatiner-${matchingProduct.id}">
            <div class="delivery-date">
                Várható szállítási dátum: 
                    <p>${dateString}</p>
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
                <span class="delete-quantity-link js-delete-link link-primary" data-product-id="${matchingProduct.id}">
                    Törlés
                </span>
                </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                    Válassz az alábbi kézbesítési lehetőségek közül:
                </div>
                ${deliveryOptionsHTML(matchingProduct, cartItem)}
                </div>
            </div>
        </div>
        `;
    })

    function deliveryOptionsHTML(matchingProduct, cartItem) {
        let html = "";


        deliveryOptions.forEach((deliveryOption)=> {

            const today = dayjs();
            let deliveryDate = today.add(
                deliveryOption.deliveryDays, "days"
            );

            
            // packages can't be delivered on weekends
            if (deliveryDate.day() === 6) {
                deliveryDate = deliveryDate.add(2, "days");
            } else if (deliveryDate.day() === 0) {
                deliveryDate = deliveryDate.add(1, "days");
            }

            const dateString = deliveryDate.locale("hu").format(
                "dddd, MMMM D"
            );




            const priceString = `${deliveryOption.priceForint} Ft`;
            
            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

            html += `
                <div class="delivery-option js-delivery-option" 
                    data-product-id="${matchingProduct.id}" 
                    data-delivery-option-id="${deliveryOption.id}">
                <input type="radio"
                    ${isChecked ? "checked" : ""}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                    <div>
                        <div class="delivery-option-date">
                            ${dateString}
                        </div>
                        <div class="delivery-option-price">
                            ${priceString}
                        </div>
                    </div>
                </div>
            `
        });

        return html;
    }



    document.querySelector(".js-order-summary")
        .innerHTML = cartSummaryHTML;


    document.querySelectorAll(".js-delete-link")
        .forEach((link) => {
            link.addEventListener("click", () => {
                const productId = link.dataset.productId;
                removeFromCart(productId);

                const container = document.querySelector(`.js-cart-item-conatiner-${productId}`);
                container.remove();

                renderPaymentSummary();
            })
        });

    document.querySelectorAll(".js-delivery-option")
        .forEach((element) => {
            element.addEventListener("click", () => {
                const {productId, deliveryOptionId} = element.dataset;
                updateDeliveryOption(productId, deliveryOptionId);

                renderOrderSummary();
                renderPaymentSummary();
            });
        });
};

renderOrderSummary();