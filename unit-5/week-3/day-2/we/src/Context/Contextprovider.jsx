import { createContext, useState } from "react";
export const Cartcontext = createContext();

export const Contextprovider = ({ children }) => {
  const [cart, setcart] = useState(0);
  const handleChange = (num) => {
    setcart(cart + num);
  };
  return <Cartcontext.Provider value={{cart,handleChange}}>{children}</Cartcontext.Provider>;
};
