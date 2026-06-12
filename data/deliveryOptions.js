export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceForint: 699,
  },
  {
    id: "2",
    deliveryDays: 3,
    priceForint: 1599,
  },
  {
    id: "3",
    deliveryDays: 1,
    priceForint: 2499,
  },
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  // returns 0, if empty
  return deliveryOption || deliveryOptions[0];
}
