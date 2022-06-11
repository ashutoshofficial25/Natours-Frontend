import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const getUser = () => {};

  const getCurrnetUser = () => {};

  const [currentUser, setCurrentUser] = useState(getUser());
  const [loggenIn, setLoggedIn] = useState(getCurrnetUser());

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loggenIn,
        setLoggedIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
