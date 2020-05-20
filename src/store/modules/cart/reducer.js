import produce from "immer"
import {saveLocalStorageProducts} from "../../../utils/saveLocalStorageProducts"

export default function cart(state=[], action) {

  switch(action.type){
    case 'ADD_TO_CART': {
      const newProduct = produce(state, draft => {
        const productIndex = draft.findIndex(p => (
          (p.code_color === action.product.code_color) && 
          (p.sizeProductSelected === action.sizeProductSelected))
          )

        if(productIndex >= 0){
            draft[productIndex].amount +=1
        } else {
          draft.push({
            ...action.product,
            sizeProductSelected: action.sizeProductSelected,
            amount: 1
          })
        }
      })

      saveLocalStorageProducts(newProduct)
      return newProduct
    }


    case 'REMOVE_FROM_CART': {
      const products =  produce(state, draft => {
        const productIndex = draft.findIndex(p => (
          (p.code_color === action.id) && 
          (p.sizeProductSelected === action.sizeProductSelected))
          )

        if(productIndex >=0 ){
          draft.splice(productIndex, 1)
        }
      })

      saveLocalStorageProducts(products)
      return products
    }


      case 'UPDATE_AMOUNT_CART': {
        const products = produce(state, draft => {
          if(action.amount <=0 ){
            return state;
          }

          const productIndex = draft.findIndex(p => (
            (p.code_color === action.id) && 
            (p.sizeProductSelected === action.sizeProductSelected))
            )
        
          if(productIndex >=0 ){
            draft[productIndex].amount = Number(action.amount)
          }
        })
        saveLocalStorageProducts(products)
        return products
      }

      case 'ADD_TO_CART_LOCALSTORAGE':
        return produce(state, draft => {
          draft.push(action.product)
          } )

    default:
      return state;
  }
};