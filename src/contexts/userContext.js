import { createContext, useEffect, useReducer } from "react";

//initial state
const inititalState = {
  user: null,
};

const Context = createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };

    default:
      return { state };
  }
};

//Context Provoder
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, inititalState);
  // const [state, dispatch] = useReducer(first, second, third)
  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
