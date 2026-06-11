import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";

export function renderPaymentSummary() {
    let productPriceForints = 0;
    let shippingPriceForint = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceForints += product.priceForint * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceForint += deliveryOption.priceForint;
    });

    const totalPriceForint = productPriceForints + shippingPriceForint;

    const paymentSummaryHTML = `
        <div class="payment-summary-title">
            Rendelésed összegzése
        </div>

        <div class="payment-summary-row">
            <div>Termékek (${updateTotalQuantity()}):</div>
            <div class="payment-summary-money">${productPriceForints} Ft</div>
        </div>

        <div class="payment-summary-row">
            <div>Szállítási díj:</div>
            <div class="payment-summary-money">${shippingPriceForint} Ft</div>
        </div>
        <div class="payment-summary-row total-row">
            <div>Végső összeg :</div>
            <div class="payment-summary-money">${totalPriceForint} Ft</div>
        </div>
        <button class="place-order-button">
            Add le a rendelésed
        </button>
    `;


    document.querySelector(".js-payment-summary")
        .innerHTML = paymentSummaryHTML;
}

function updateTotalQuantity() {
    let totalQuantity = 0;

    cart.forEach((item) => {
        totalQuantity += item.quantity;
    });

    document.querySelector(".js-header-total-count")
        .innerHTML = totalQuantity + " db Termék";

    return totalQuantity;
}

