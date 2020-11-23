import React, { createContext, useContext, useReducer } from 'react';

// To Prepare the Data Layer
export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) =>
    (<StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>)

// Pull Information
export const useStateValue = () => useContext(StateContext)
