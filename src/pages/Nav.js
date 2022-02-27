//import styled library
import styled from "styled-components";

//package
import { Link } from "react-router-dom"

const Nav = ()=> {
    return (
        <Navbar >
            <h1><Link id="Logo" to="/" >Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/" >About Us</Link>
                </li>

                <li>
                    <Link to="/mywork" > My Work </Link>
                </li>

                <li>
                    <Link to="/contact" > Let's Shake 
                        <span> 
                            <img src="" alt="hand" /> 
                            </span> 
                    </Link>
                </li>

            </ul>

        </Navbar>
    )
}

const Navbar= styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
    /* background: linear-gradient(90deg, #242525, #2f2e2e); */
    background: linear-gradient(90deg, #252424, #382f2f);
    border-radius: 5px;
    min-height: 10vh;
    display: flex;
    margin-top: -1.5rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;

    a{
        color: white;
        text-decoration: none;
    }

    ul{
        display: flex;
        list-style: none;
    }

    #Logo{
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }

    li{
        padding-left: 8rem;
        position: relative;
    }

`

export default Nav;