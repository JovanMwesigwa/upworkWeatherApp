/* eslint-disable prettier/prettier */
import React from 'react'

const MyContext = React.createContext()

const ContextProvider = ({ children }) => {
    return (
        <MyContext.Provider value={"myvalue"}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider
