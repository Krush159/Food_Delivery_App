import * as actions from './actionType'

export const search = (id) =>({
    type : actions.SEARCH_PRODUCT,
    id
})

export const addToCart = (id) =>({
    type : actions.ADD_TO_CART,
    id
})

export const removeFromCart = (id) =>({
    type : actions.REMOVE_FROM_CART,
    id
})

export const addToOrders = (id) =>({
    type : actions.ADD_TO_ORDERS,
    id
})