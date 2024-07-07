import React from 'react'
import "./footer_style.css"
import clinical_scholar from "../../assets/images/clinical_scholar_logo.png"
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="test__footer">
                <div className='test__socials_container'>
                    <img src={clinical_scholar} alt="" />
                    <div className="test__socials_icon_container">
                        <FaFacebookF color='#626262' size={21} className='icon'/>
                        <FaTwitter color='#626262' size={21} className='icon'/>
                        <FaYoutube color='#626262' size={21} className='icon'/>
                        <FaInstagram color='#626262' size={21} className='icon'/>
                    </div>

                </div>
                <div className='test__copyright_container'>
                    <p> © Copyright Clinical Scholar </p>
                    <div className="divider"></div>
                    <p>Powered by Quinoid Buisness Solutions</p>
                </div>
           
            
            </div> 
  )
}

export default Footer