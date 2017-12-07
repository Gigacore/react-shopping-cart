import axios from "axios";

export function getData(payload) {
  return function(dispatch) {
    dispatch({type: "FETCH_ITEMS"});
    axios.get("https://api.myjson.com/bins/19dvvv")
      .then((response) => {
        dispatch({type: "FETCH_ITEMS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_ITMS_REJECTED", payload: err})
      })
  }
}

export function syncQuantity(payload) {
  return {
    type: "SYNC_QUANTITY",
    payload: payload
  }
}