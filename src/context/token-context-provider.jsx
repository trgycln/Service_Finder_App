import { createContext, useState } from "react";

export const TokenContext = createContext({});

const TokenContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const contextValue = {
    token,
    setToken
  };
  console.log(token);
  return (
    <TokenContext.Provider value={contextValue}>
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider