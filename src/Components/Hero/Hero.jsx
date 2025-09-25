import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Hero(){
    return (
        <div id='hero' className='hero'>
            <img src='src\assets\Sankeerth-New.jpg' alt="" />
            <h1><span>Hi, I'm Sankeerth Gandla</span></h1>
            <p>Frontend Developer from Hyderabad, India, passionate about crafting modern, responsive, and user-friendly web applications with JavaScript.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={0} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume"><a href="src\assets\Sankeerth-Resume.pdf" download="">My Resume</a></div>
            </div>
        </div>
    )
}
export default Hero;