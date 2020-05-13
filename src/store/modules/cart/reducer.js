import produce from "immer"

export default function cart(state=[], action) {

  switch(action.type){
    case 'ADD_TO_CART':
      return produce(state, draft => {
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
    default:
      return state;
  }
};