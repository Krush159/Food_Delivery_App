import * as actions from './actionType'
import { data } from '../data'
const initState = {
    data: data,

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
                        return (a.cost - b.cost)
                    }
                    else if (action.payload === "desc") {
                        return (b.cost - a.cost)
                    }
                })
                ] : state.data
            }
        case actions.ADD_TO_CART:
            return { ...state }
        case actions.ADD_TO_ORDERS:
            return { ...state }
        default:
            return state
    }
}
export default reducer