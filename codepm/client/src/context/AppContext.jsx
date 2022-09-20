import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const INITIAL_STATE = {
    entity: {
        order: [],
        product: [],
        category: [],
        user: []
    },
    error: null,
    success: null,
    loading: false

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
                    dispatch: dispatch
                }
            }
        >
            {children}
        </AppContext.Provider>
    )
}

export default ApplicationContext