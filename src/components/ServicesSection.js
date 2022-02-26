//Import icons
import clock from "../img/clock.svg"
import money from "../img/money.svg"
import diaphragm from "../img/diaphragm.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.png"


const ServicesSection= () =>{


    return (

        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services </h2>
                <div className="cards">

                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                </div>
            </div>
            <div className="image">
                <img src={home2} alt="service" />
            </div>
        </div>

    ) ;
}

export default ServicesSection;