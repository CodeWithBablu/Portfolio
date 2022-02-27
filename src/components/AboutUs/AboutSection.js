import home1 from "../../img/home1.png"

//import styled-library
import styled from "styled-components";

//import style components
import { About, Hide, Description, Image} from "../../styles";

const AboutSection= () =>{

    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We Work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>
                    contact us for any photography or videograpghy ideas and will
                    have professional with amazing skills

                </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="home1" />
            </Image>
        
        </About>
    );
}

//Styled - fragments



export default AboutSection;
