import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../actionTypes/productActionTypes";

interface HoursItem {
  closes_at:  string,
  is_closed: boolean,
  opens_at:  string,
}

export interface productItem {
  address: string,
  description: string,
  hours: {
    friday: HoursItem,
    monday: HoursItem,
    saturday: HoursItem,
    sunday: HoursItem,
    thursday: HoursItem,
    tuesday: HoursItem,
    wednesday: HoursItem,
  },
  id: number,
  logo: string,
  name: string,
  phone_number: string,
  review: string,
  type: string,
  uid: string,
}

interface ProductsState {
  loading: boolean,
  error: any,
  products: Array<productItem>,
  filteredProducts: Array<productItem>,
  productTypes: Array<string>,
  filters: Array<string>
}

const initialState: ProductsState = {
  loading: false,
  error: null,
  products: [],
  filteredProducts: [],
  productTypes: [],
  filters: []
}

export default function productReducer(state = initialState, action:{type:string, payload:any}) {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {...state, loading: true}
    case GET_PRODUCT_SUCCESS:
      const typeList = action.payload.map((element: productItem) => element.type);
      return {...state,
        loading: false,
        products: action.payload,
        productTypes: Array.from(new Set(typeList)),
        filters:[]
      }
    case GET_PRODUCT_FAILURE:
      return {...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}