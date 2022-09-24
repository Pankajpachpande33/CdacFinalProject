import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const INITIAL_STATE = {
    entity: {
        category: [],
        subCategory:[],
        order: [],
        product: [],
        seller:[],
        user:[],
        address:[],
        
        
    },
    currentProduct:null,

    error: null,
    success: null,
    loading: false,
    dispatch: null,
     
     

}

export const AppContext = createContext(INITIAL_STATE)

const ApplicationContext = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    return (
        <AppContext.Provider
            value={
                {
                    entity: state.entity,
                    error: state.error,
                    success: state.success,
                    loading: state.loading,
                    dispatch: dispatch,
                    currentProduct:state. currentProduct
                }
            }
        >
            {children}
        </AppContext.Provider>
    )
}

export default ApplicationContext