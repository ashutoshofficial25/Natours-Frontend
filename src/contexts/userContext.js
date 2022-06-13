import React, { createContext, useState } from "react";

export const UserContext = createContext(true);

export const UserProvider = (props) => {
  const getUser = () => {};

  const getCurrnetUser = () => {};

  const [currentUser, setCurrentUser] = useState(getUser());
  const [loggedIn, setLoggedIn] = useState(getCurrnetUser());

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loggedIn,
        setLoggedIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
