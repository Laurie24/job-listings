import React, { Suspense, useContext } from 'react'
import { GlobalStyles } from './styles/globals.jsx'
import data from '../data.json'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{ data }}>
            <GlobalStyles />

            <Suspense fallback={'loading'}>{children}</Suspense>
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
