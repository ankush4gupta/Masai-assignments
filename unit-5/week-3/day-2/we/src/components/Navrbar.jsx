import { useContext } from "react";
import { Cartcontext } from "../Context/Contextprovider";
export const Navbar = () => {
  const {cart} = useContext(Cartcontext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-end",
        border: "solid",
        borderColor: "red",
        padding: "5px"
      }}
    >
      Cart : {cart}
    </nav>
  );
};
