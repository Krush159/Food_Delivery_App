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

export const addToCart = (payload1,payload2) => ({
    type: actions.ADD_TO_CART,
    payload1,
    payload2
})

export const removeFromCart = (id) => ({
    type: actions.REMOVE_FROM_CART,
    id
})

export const addItemsToRestaurant = (id) => ({
    type: actions.ADD_ITEMS_TO_RESTAURANT,
    id
})
export const subtractionQty = (payload) => ({
    type: actions.DECREMENT_QUANTITY,
    payload
})
export const loggedInUserName = (payload) =>({
    type : actions.LOGGED_IN_USERNAME,
    payload
})