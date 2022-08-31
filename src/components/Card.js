import About from './About';
import Interest from './Interest';
import lauren from '../lauren.png'
import linkedin from '../linkedin.png';
import Footer from './Footer';
import email from '../mail.png';

function Card() {
    return (
        <div className="container">
            <div className='card'>
                <div className="card-image">
                    <img src={lauren} alt="lauren"  className='img'/>
                </div>
                <div className="card-text">
                    <h1>Lauren Smith</h1>
                    <p>Frontend Developer</p>
                    <small>laurensmith.website</small>
                </div>
                <div className="buttons">
                    <button className="email-1"><img src={email} alt="email icon" /> Email</button>
                    <button className="linked"><img src={linkedin} alt="linkedin icon" />Linkedin</button>
                </div>
                <About />
                <Interest />
                <div className='card-footer'>
                    <Footer />
                </div>
            </div>
            
            <div className="card">
                <div className='card-image'>
                    <img src={lauren} alt="Lauren" className="img" />
                </div>
                <div className="card-text">
                    <h1>Lauren Smith</h1>
                    <p>Frontend Developer</p>
                    <small>laurensmith.website</small>
                </div>
                <div className="buttons">
                    <button className="email"><img src={email} alt="email icon" /> Email</button>
                    
                </div>
                <About />
                <Interest />
                <div className='card-footer'>
                    <Footer />
                </div>
            </div>
            
        </div>
    );
}

export default Card;