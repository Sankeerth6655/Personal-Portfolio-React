import './Navbar.css'
import logo from '../../assets/logo.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Navbar(){
    const [menu,setMenu]=useState('home');
    return (
        <div id='home' className="navbar">
            <div className="logo">
                <h1>SG</h1>
                <img src={theme_pattern} alt="" />
            </div>
            {/* <img src={menu_open} alt="" className='nav-mob-open' /> */}
            <ul className='nav-menu'>
                {/* <img src={menu_close} alt="" className="nav-mob-close" /> */}
                <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>{setMenu('home')}}>Home</p></AnchorLink>{menu==='home' && <img src={underline}/>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setMenu('about')}}>About me</p></AnchorLink>{menu==='about' && <img src={underline}/>}</li>
                <li><AnchorLink className='anchor-link' offset={0} href='#services'><p onClick={()=>{setMenu('services')}}>Services</p></AnchorLink>{menu==='services' && <img src={underline}/>}</li>
                <li><AnchorLink className='anchor-link' offset={0} href='#work'><p onClick={()=>{setMenu('portfolio')}}>Portfolio</p></AnchorLink>{menu==='portfolio' && <img src={underline}/>}</li>
                <li><AnchorLink className='anchor-link' offset={0} href='#contact'><p onClick={()=>{setMenu('contact')}}>Contact</p></AnchorLink>{menu==='contact' && <img src={underline}/>}</li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className='anchor-link' offset={0} href='#contact'>Connect with me</AnchorLink>
            </div>
        </div>
        
    )
}
export default Navbar;