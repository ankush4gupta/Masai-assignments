import { useContext } from "react";
import { Cartcontext } from "../Context/Contextprovider";
export const Cart = () => {
  const { handleChange } = useContext(Cartcontext);
  return (
    <div
      style={{
        margin: "10px",
        width: "200px",
        height: "300px",
        backgroundColor: "teal",
        padding: "20px"
      }}
    >
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
