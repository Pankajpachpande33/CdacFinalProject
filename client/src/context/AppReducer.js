import * as actionTypes from "../constants/ApplicationTypes";

const AppReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.LOAD_CATEGORY_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        entity: {
          ...state.entity,
          category: action.payload,
        },
      };
    case actionTypes.LOAD_SUBCATEGORY_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        entity: {
          ...state.entity,
          subCategory: action.payload,
        },
      };
    case actionTypes.LOAD_PRODUCT_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        entity: {
          ...state.entity,
         product: action.payload,
         // newProduct:action.payload
        },
      };
    case actionTypes.LOAD_ORDER_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        entity: {
          ...state.entity,
          order: action.payload,
        },
      };
    case actionTypes.LOAD_SELLER_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        entity: {
          ...state.entity,
          seller: action.payload,
        },
      };
    case actionTypes.LOAD_USER_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        entity: {
          ...state.entity,
          user: action.payload,
        },
      };
    case actionTypes.LOAD_ADDRESS_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        entity: {
          ...state.entity,
          address: action.payload,
        },
        
      };
      case actionTypes.LOAD_SINGLE_SUCCESS:
     
      return {
        ...state,
        singleproduct: action.payload,
      };
      case actionTypes.LOAD_SINGLE_PRODUCT_SUCCESS:
      console.log(action);
      return {
        // console.log(action);
        ...state,
        loading: false,
        currentProduct: action.payload
          };
    default:
      return state;
  }
};

export default AppReducer;
