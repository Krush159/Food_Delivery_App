import * as actions from './actionType'

const initState = {
    data: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case actions.SEARCH_PRODUCT:
            return { ...state,
                
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