export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exitingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  return exitingItem
    ? cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      )
    : [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems
    .map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          }
        : cartItem
    )
    .filter((cartItem) => cartItem.quantity > 0);
};
