import { ProductItem } from "../redusers/productReducer";
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../actionTypes/productActionTypes";



export const getProductRequest = () => ({
  type: GET_PRODUCT_REQUEST,
});

export const getProductSuccess = (payload: ProductItem[]) => ({
  type: GET_PRODUCT_SUCCESS,
  payload
});

export const getProductFailure = (payload: unknown) => ({
  type: GET_PRODUCT_FAILURE,
  payload
});

