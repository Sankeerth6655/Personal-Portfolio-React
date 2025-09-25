import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

function About(){
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src="src\assets\Sankeerth-New.jpg" height='550px' width='500px' style={{borderRadius:'20px'}} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Final-year IT student and aspiring Frontend Developer with strong skills in HTML5, CSS3, JavaScript, and ReactJS. Passionate about building responsive, user-friendly web applications with clean and efficient code</p>
                        <p> Currently expanding expertise in the MERN stack to transition into Full Stack Development. Recognized for strong collaboration and problem-solving skills, with a commitment to continuous learning and professional growth</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:'60%'}}/></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{width:'70%'}}/></div>
                        <div className="about-skill"><p>React JS</p> <hr style={{width:'80%'}}/></div>
                        <div className="about-skill"><p>C Language</p> <hr style={{width:'60%'}}/></div>
                        <div className="about-skill"><p>MySQL</p> <hr style={{width:'50%'}}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;