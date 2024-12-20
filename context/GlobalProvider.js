import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from '../lib/appwrite';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
         .then((res) => {
            if(res){
                setUser(res)
                setIsLoggedIn(true)
                console.log(`User: ${user} and is logged in: ${isLoggedIn}`);
            } else {
                setUser(null)
                setIsLoggedIn(false)
            }
         })
         .catch(error => console.log(error))
         .finally(() => setIsLoading(false))
    }, [])

    return(
        <GlobalContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser, isLoading}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;

