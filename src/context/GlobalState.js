import React,{createContext,useReducer} from "react"
import AppReducer from "./AppReducer"


const initialState = {
    transaction : [
        {id : 1, text : 'Shoes',amount : -90},
        {id : 2, text : 'Dress',amount : -50},
        {id : 3, text : 'Food', amount : -40},
        {id : 4, text : 'Salary', amount : 100}
    ]

}

export const GlobalContext = createContext(initialState);

export const GlobalProvider =({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    return(
        <GlobalContext.Provider value={{transactions:state.transactions}}>
            {children}
        </GlobalContext.Provider>
    )
}