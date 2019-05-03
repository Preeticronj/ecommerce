import * as actionType from './Action/ActionType'
const initialState = {
    flag: false,
    cart_arr: [],
    filter_arr: [],
    result_arr: []

}
export const Counter = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            let newArray = [...state.cart_arr]
            newArray = newArray.map(item => {
                if (item.id === action.payload.id) {
                    item.count += 1;
                }
                return item
            })
            return {
                ...state,
                flag: true,
                cart_arr: newArray
            }
            break;
        case actionType.DECREMENT:
            let newArray1 = [...state.cart_arr]
            newArray1 = newArray1.map(item => {
                if (item.id === action.payload.id) {
                    item.count -= 1;
                }
                return item
            })
            return {
                ...state,
                flag: true,
                cart_arr: newArray1
            }
            break;
        case actionType.ADD_TO_CART:
            const data = action.payload;
            data.count = 1;
            return {
                ...state,
                cart_arr: [...state.cart_arr, data],
                flag: false
            }
            break;
        case actionType.DELETE_ITEM:
            return {
                ...state,
                cart_arr: state.cart_arr.filter(i => i.id !== action.payload.item.id),
                flag: true
            }
            break;
        case actionType.FILTER_ITEM:
            return {
                ...state,
                filter_arr: action.payload,
                result_arr: action.payload,
                flag: false
             }
            break;
        case actionType.FILTER_PRODUCTS:
            let dummy = ''
            if (action.payload.length > 0) {
                dummy = state.result_arr.filter(prod => {
                    for (let i = 0; i < action.payload.length; i++) {
                        if (prod.brand === action.payload[i]) {
                         return prod
                        }
                    }
                })
            } else {
                dummy = [...state.result_arr];
            }
            return {
                ...state,
                filter_arr: dummy,
                flag: false
            }
            break;
        default:
         return state;
    }
}
export default Counter;
