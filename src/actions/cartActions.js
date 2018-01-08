import { ADD_TO_CART, UPDATE_CART, REMOVE_ITEM, UPDATE_QUANTITY } from '../constants/ActionTypes';

export function addToCart(payload) {
  return {
    type: ADD_TO_CART,
    payload: payload
  }
}

export function updateCart(payload) {
  return {
    type: UPDATE_CART,
    payload: payload
  }
}

export function removeItem(payload) {
  return {
    type: REMOVE_ITEM,
    payload: payload
  }
}

export function updateQuantity(payload) {
  return {
    type: UPDATE_QUANTITY,
    payload: payload
  }
}