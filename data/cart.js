const savedCart = localStorage.getItem("cart");
export let cart = savedCart ? JSON.parse(savedCart) : [];

function saveToStorage() {
    if (!Array.isArray(cart)) {
        cart = [];
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, quantity = 1) {
    quantity = Number(quantity);
    if (Number.isNaN(quantity) || quantity < 1) {
        quantity = 1;
    }

    let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity,
            deliveryOptionId: "1"
        });
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      } 
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();

}