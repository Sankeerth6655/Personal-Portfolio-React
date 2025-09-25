import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
function Footer(){
    return (
        <div id='footer' className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-top-left-logo">
                    <h1>Sankeerth Gandla</h1>
                    <img src={theme_pattern} alt="" />
                    </div>
                    <p>I am a frontend developer from India skilled in HTML5, CSS3, JavaScript & React JS with a growing focus on the MERN stack and a passion for creating responsive, user-friendly web applications</p>
                </div>
                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div> */}
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">© Sankeerth Gandla. All rights reserved</div>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;