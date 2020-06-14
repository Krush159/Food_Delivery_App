import * as actions from './actionType'

export const search = (payload) => ({
    type: actions.SEARCH_PRODUCT,
    payload
})

export const handleRating = (payload) => ({
    type: actions.FILTER_RATING_PRODUCT,
    payload
})

export const handlePayment = (payload) => ({
    type: actions.FILTER_PAYMENT_PRODUCT,
    payload
})

export const handleSort = (payload) => ({
    type: actions.SORT_PRODUCT,
    payload
})

export const addToCart = (id) => ({
    type: actions.ADD_TO_CART,
    id
})

export const removeFromCart = (id) => ({
    type: actions.REMOVE_FROM_CART,
    id
})

export const addToOrders = (id) => ({
    type: actions.ADD_TO_ORDERS,
    id
})