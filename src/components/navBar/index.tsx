import React from "react"
import './style.css'
import Logo from './saketa-logo.svg'

const Navone:React.FC=()=>{
    return (<div>
        <nav className="navTop">
            <img src={Logo} alt="saketa logo" />
            <div className="title">
                <p className="empdir">Employee Directory</p>
                <p>The Ultimate People Directory Experience</p>
            </div>
            <div className="profileName" >Welcome, <span className="name">Eshwar </span></div>
        </nav>
    </div> 
    )
}

export default Navone;