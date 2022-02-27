import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;

    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #ff1a53;
        background: transparent;
        color: white;
        font-family: 'Inter', sans-serif;
        transition: all 0.5 ease;

        &:hover{
            background-color: #ff1a53;
            color:white;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
        font-size: 2rem;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: bold;
        color: #ff1a53;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
    }


`

// font-family: 'Lobster', cursive;

export default GlobalStyle;