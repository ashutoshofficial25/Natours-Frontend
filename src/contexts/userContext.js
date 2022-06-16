import React, { createContext, useState } from "react";

export const UserContext = createContext(true);

export const UserProvider = (props) => {
  const getUser = () => {
    let user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const getCurrnetUser = () => {
    let user = localStorage.getItem("jwt");
    if (user) {
      return user;
    } else {
      return false;
    }
  };

  const [currentUser, setCurrentUser] = useState(getCurrnetUser());
  const [loggedIn, setLoggedIn] = useState(getUser());

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
