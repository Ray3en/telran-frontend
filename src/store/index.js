import {thunk} from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import { productsReducer } from './productsReducer'
import { productInfoReducer } from './productInfoReducer'
import { cartReducer } from './cartReducer'


const rootReducer = combineReducers({
    products: productsReducer,
    productInfo: productInfoReducer,
    cart: cartReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))