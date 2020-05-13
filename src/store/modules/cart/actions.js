export function addToCart(product, sizeProductSelected){
  return {
    type: 'ADD_TO_CART',
    product,
    sizeProductSelected
  }
}

export function removeFromCart(id, sizeProductSelected){
  return {
    type: 'REMOVE_FROM_CART',
    id,
    sizeProductSelected
  }
}

export function updateAmount(id, sizeProductSelected, amount){
  return {
    type: 'UPDATE_AMOUNT_CART',
    id,
    sizeProductSelected,
    amount
  }
}