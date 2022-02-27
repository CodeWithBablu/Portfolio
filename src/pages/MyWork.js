//import styled
import styled from "styled-components";

//import library
import { Link } from "react-router-dom"

//import Images
import theracer from "../img/theracer-small.png"
import athlete from "../img/athlete-small.png"
import goodtimes from "../img/goodtimes-small.png"

//import Contact-US-components


const MyWork= () =>{

    return (
        
        <Work>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="#">
                    <img src={ theracer } alt="theracer" />
                </Link>
            </Movie>

            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="#">
                    <img src={ athlete } alt="athlete" />
                </Link>
            </Movie>

            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="#">
                    <img src={ goodtimes } alt="goodtimes" />
                </Link>
            </Movie>
        </Work>

    );
}

const Work= styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`

const Movie = styled.div`
    padding-bottom: 10rem;
`

export default MyWork;
