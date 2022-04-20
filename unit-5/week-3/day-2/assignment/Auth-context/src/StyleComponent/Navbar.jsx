import styled from "styled-components";
const Nav = styled.nav`
display : flex;
justify-content: end;
width : 100%;
background-color : skyblue;
position: relative;
`
const Button = styled.button`
    padding: 10px 20px;
    color:white;
    background-color: black;
    margin: 10px;
    border: none;
    cursor: pointer;
    
`
const Logo = styled.div`
    background-color: black;
    color: white;
    /* width: 5%; */
    font-size: 30px;
    position:absolute;
    padding: 20px;
    left :17px;
    top:17px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`
export { Nav, Button, Logo }