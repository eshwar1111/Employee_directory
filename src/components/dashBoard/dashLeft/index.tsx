import React from "react";
import './style.css'

interface dashLeftProps{
    handleClick:(s:string,filterValue:string)=>void;
}


const Dashleft:React.FC<dashLeftProps>=({handleClick})=>{
    return(
        <div className="dashl">
            <div className="dashlElement">
                <h6>Departments</h6>
                <ul className="dashButtons">
                    <li ><button  id="button-office"name="department" onClick={()=>handleClick("IT","department")}>IT</button></li>
                    <li ><button  id="button-office"name="department" onClick={()=>handleClick("Human Resources","department")}>Human Resources</button></li>
                    <li ><button  id="button-office"name="department" onClick={()=>handleClick("MD","department")}>MD</button></li>
                    <li ><button  id="button-office"name="department" onClick={()=>handleClick("Sales","department")}>Sales</button></li>
                </ul>
            </div>
            <div className="dashlElement">
                <h6>Offices</h6>
                <ul className="dashButtons">
                    <li> <button id="button-office"name="office" onClick={()=>handleClick("Seattle","office")}>Seattle</button> </li>
                    <li> <button id="button-office"name="office" onClick={()=>handleClick("India","office")}>India</button> </li>
                </ul>
            </div>
            <div className="dashlElement">
                <h6>Job Titles</h6>
                <ul className="dashButtons">
                    <li> <button id="button-job" name="jobTitle" onClick={()=>handleClick("SharePoint Practice Head","jobTitle")}>SharePoint Practice Head</button></li>
                    <li> <button id="button-job" name="jobTitle" onClick={()=>handleClick(".Net Devlopement","jobTitle")}>.Net Devlopement</button> </li>
                    <li> <button id="button-job" name="jobTitle" onClick={()=>handleClick("Recruiting Expert","jobTitle")}>Recruiting Expert</button> </li>
                    <li> <button id="button-job" name="jobTitle" onClick={()=>handleClick("BI Devlopement","jobTitle")}>BI Devlopement</button></li>
                    <li> <button id="button-job" name="jobTitle" onClick={()=>handleClick("Business Analyst","jobTitle")}>Business Analyst</button> </li>
                    <li ><button id="button-job" name="jobTitle">view more</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Dashleft;