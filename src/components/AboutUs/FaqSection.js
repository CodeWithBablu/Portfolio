//import style components
import { About as faq, Hide, Description, Image} from "../../styles";

//import styled-library
import styled from "styled-components"

const FaqSection= () =>{

    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span> </h2>

            <div className="question">
                <h4>How Do I start ?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                </div>
                <div className="faq-line"></div>
            </div>
            
            <div className="question">
                <h4>What product you offer ?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                </div>
                <div className="faq-line"></div>
            </div>
            
            <div className="question">
                <h4>Different Playment methods ?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                </div>
                <div className="faq-line"></div>
            </div>
            
            <div className="question">
                <h4>Daily schedules ?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                </div>
                <div className="faq-line"></div>
            </div>

        </Faq>
    );
}

//style frag

const Faq= styled(faq)`
    display: block;

    span{
        display:block;
    }

    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;

    }

    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer{
        padding: 2rem 0rem;

        p{
            padding: 1rem 0rem;
        }
    }

`

export default FaqSection;
