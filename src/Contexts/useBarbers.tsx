/* import { createContext, ReactNode, useContext, useEffect, useState } from "react"

import { Barbers } from "../Interfaces"
import { api } from "../services/api"

interface BarbersContextData {
    barbers: Barbers[],
    searchBarber: string,
    setSearchBarber: any
}

export const BarbersContext = createContext<BarbersContextData>({} as BarbersContextData)

interface ChildrenProviderProps {
    children: ReactNode
}

export function BarbersProvider({children}: ChildrenProviderProps) {

  

    return(
        <BarbersContext.Provider value={{barbers, searchBarber, setSearchBarber}} >
            {children}
        </BarbersContext.Provider>
    )
}

export function useBarbers() {
    const context = useContext(BarbersContext)

    return context
} */

export function BarbersProvider() {
    return (
        <>
            oi
        </>
    )
}