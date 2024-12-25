import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res && res.documents && res.documents.length > 0) {
          setUser(res.documents[0]);
          setIsLoggedIn(true);
          console.log(`User: ${res.documents[0]} is logged in: true`);
        } else {
          setUser(null);
          setIsLoggedIn(false);
          console.log("No user logged in");
        }
      })
      .catch((error) =>
        console.log("Error fetching current user", error.message)
      )
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <GlobalContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser, isLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
