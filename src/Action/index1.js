import * as actionType from "./ActionType";

export const increment = item => ({
  type: actionType.INCREMENT,
  payload: item
});

export const decrement = item => ({
  type: actionType.DECREMENT,
  payload: item
});

export const add_to_Cart = item => {
  return {
    type: actionType.ADD_TO_CART,
    payload: item
  };
};

export const deleteItem = item => {
  return {
    type: actionType.DELETE_ITEM,
    payload: {
      item
    }
  };
};

export const filterItem = data => {
  return {
    type: actionType.FILTER_ITEM,
    payload: data
  };
};

export const filterProduct = array => {
  return {
    type: actionType.FILTER_PRODUCTS,
    payload: array
  };
};
