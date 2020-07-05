import * as actions from '../actionType'
import { data } from '../../data'
const initState = {
    data: data,
    cart: [],
    logName:"",
    user: [],
    search: false
    
}
const reducer = (state = initState, action) => {
    console.log(action.payload)
    
    switch (action.type) {
        case actions.SEARCH_PRODUCT:
            return {
                ...state,
                data: data.filter((item) => (
                        (item.name.toLowerCase().includes(action.payload.toLowerCase()))
                    )
                )
            }
        case actions.FILTER_RATING_PRODUCT:
            var value1 = action.payload;

            return ({
                ...state,
                data: data.filter(item => item.ratings <= value1)
            })
        case actions.FILTER_PAYMENT_PRODUCT:

            return {
                ...state,

                data: state.data.filter(item => {
                    if (action.payload === "cash") {
                        if (item.payment.cash) {
                            return item
                        }
                    }
                    else if (action.payload === "card") {
                        if (item.payment.card) {
                            return item
                        }
                    }
                    else {
                        return item
                    }
                    return null
                }
                )
            }
        case actions.SORT_PRODUCT:
            return {
                ...state,
                data: state.data.length > 0 ? [...state.data.sort((a, b) => {
                    if (action.payload === "asc") {
                        return (a.ratings - b.ratings)
                    }
                    else if (action.payload === "desc") {
                        return (b.ratings - a.ratings)
                    }
                })
                ] : state.data
            }
        case actions.ADD_TO_CART:
            let items = {
                id: action.payload2.id,
                name: action.payload1.name,
                menu : action.payload2.menu,
                cost: action.payload1.cost,
                rating:action.payload1.ratings,
                place:action.payload1.place,
                count:1,
                total:action.payload1.cost
            }
            return { ...state,
                        cart: [...state.cart,items] ,
                        
            }
        case actions.DECREMENT_QUANTITY:
            let subtractionCart = [...state.cart]
            const subProduct = subtractionCart.find(item => item.id === action.payload)
            const ind = subtractionCart.indexOf(subProduct)
            const elem = subtractionCart[ind]
            elem.count -= 1
            if (elem.count === 0) {
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id!== action.payload)
                }
            }
            else {
                elem.total = Number(elem.cost) * Number(elem.count)
                
                return {
                    ...state,
                    cart: [...subtractionCart]
                }
            }
        case actions.INCREMENT_QUANTITY:
            console.log(state.cart)
            let additionCart = [...state.cart]
            const addProduct = additionCart.find(item => item.id === action.payload)
            const index = additionCart.indexOf(addProduct)
            const element = additionCart[index]
            element.count += 1
            element.total = Number(element.cost) * Number(element.count)
            
            return {
                ...state,
                cart: [...additionCart]
            }
        case actions.LOGGED_IN_USERNAME:
            return {
                ...state,
                logName: action.payload
            }
        // case actions.OPEN_SEARCH:
        //     return {
        //         ...state,
        //         search: true
        //     }
        case actions.ADD_ITEMS_TO_RESTAURANT:
            return { ...state }
        default:
            return state
    }
}
export default reducer