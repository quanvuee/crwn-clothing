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
    : [...cartItems,{...cartItemToAdd,quantity:1}];
};
