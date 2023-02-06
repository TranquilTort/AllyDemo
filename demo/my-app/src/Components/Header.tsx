import React from 'react';
import logo from "../logo.svg";

function Header(){
    return (
        <div className='header-container'>
            <img className="rsm-logo" src={logo}/>
            <div className='header-title'>
                <>
                    Coding Challenge By Christopher Regan
                </>
                <div className='header-links'>
                    <a target="_blank" href="/RSM-HCD-Coding-Challenge-Instructions.pdf" download="RSM Challenge Instructions">Instructions</a>&nbsp;
                    <a target="_blank" href="https://www.linkedin.com/in/chris-regan-089692211/">LinkedIn </a>&nbsp;
                    <a target="_blank" href="https://github.com/TranquilTort/RSM-HCD-Christopher-Regan"> GitHub </a>&nbsp;
                    <a target="_blank" href="/Regan_Christopher_Resume.pdf">Resume</a>
                </div>
            </div>  
        </div>
        
    )
}
export default Header;