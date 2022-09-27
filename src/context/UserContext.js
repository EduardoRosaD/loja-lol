import { createContext } from "react";
import { useCounterProvider } from "../hooks/UseCounter";


export const UserContext = createContext({})

export function UserProvider({children}){
    return (
        <UserContext.Provider value={useCounterProvider()}>
            {children}
        </UserContext.Provider>
    )
}