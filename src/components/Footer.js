import instagram from '../instagram.png';
import fb from '../fb.png';
import github from '../github.png';
import twitter from '../twitter.png'

function Footer() {
    return (
        <div className='footer-icon'>
            <img src={twitter} alt="twitter icon" />
            <img src={fb} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={github} alt="github icon" />
        </div>

    );
}

export default Footer;