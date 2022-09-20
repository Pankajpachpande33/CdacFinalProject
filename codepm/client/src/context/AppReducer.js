import * as actionTypes from "../constants/ApplicationTypes";

const AppReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.START_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.STOP_LOADING:
            return {
                ...state,
                loading: false
            }
        case actionTypes.LOAD_CATEGORY_SUCCESS:
            console.log(action)
            return {
                ...state,
                loading: false,
                entity: {
                    ...state.entity,
                    category: action.payload
                }
            }
        default:
            return state;
    }
};

export default AppReducer;