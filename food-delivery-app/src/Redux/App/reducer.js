import * as actions from '../actionType'
import { data } from '../../data'
const initState = {
    data: data,
    cart: [],
    logName:"",
    user: []
    
}
const reducer = (state = initState, action) => {
    console.log(action.payload)
    console.log(state.cart)
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
                count:action.payload2.count
            }
            return { ...state,
                        cart: [...state.cart,items] ,
                        
            }
        case actions.DECREMENT_QUANTITY:
            return {
                ...state,
                data: state.data
            }
        case actions.LOGGED_IN_USERNAME:
            return {
                ...state,
                logName: action.payload
            }
        case actions.ADD_ITEMS_TO_RESTAURANT:
            return { ...state }
        default:
            return state
    }
}
export default reducer