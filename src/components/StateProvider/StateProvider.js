import React, { createContext, useContext, useReducer} from "react";

// Przygotowanie dataLayer
export const StateContext = createContext();

// Owija naszą aplikację

export const StateProvider = ({ reducer, initialState, children}
) => (
    <StateContext.Provider value={useReducer(reducer, initialState)
    }>
        {children}
    </StateContext.Provider>
);

// pobiera informacje z dataLayer
export const useStateValue = () => useContext(StateContext)