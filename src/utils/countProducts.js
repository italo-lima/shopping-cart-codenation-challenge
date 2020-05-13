export function countProducts(products) {

  return products.reduce((acc, current) => {
    return acc += current.amount
  }, 0)

}