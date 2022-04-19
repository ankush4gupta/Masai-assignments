import styled from "styled-components";
const Button = styled.button`
  padding: 10px;
  border: ${({ type }) => {
        return type === "default"
            ? "1px soild black"
            : type === "dashed"
                ? "1px dashed"
                : "none";
    }};
  border-color: "light-gay";
  margin: 5px;
  cursor: pointer;
  font-weight: 600;
  background-color: ${({ type }) => {
        return type === "primary" ? "blue" : "white";
    }};
  color: ${({ type }) => {
        return type === "primary" ? "white" : type === "link" ? "skyblue" : "black";
    }};
`;
export { Button };