import styled from "styled-components";

import movieInfo from "../movieState";

//import library

import { useNavigate } from "react-router-dom";

const MovieDetails=() =>{


    const history= useNavigate();
    const url= history.location.pathname;
    console.log(history);

    return (

        <div>
            <h1>Movie Details</h1>
        </div>
    );
}

export default MovieDetails;