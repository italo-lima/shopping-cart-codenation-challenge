export function saveLocalStorageProducts(products) {
    localStorage.setItem('@cartProducts', JSON.stringify(products))
}