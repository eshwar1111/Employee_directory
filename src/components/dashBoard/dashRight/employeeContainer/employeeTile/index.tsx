import React from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import IEmployee from '../../../../../config/IEmployee'

interface EmployeeTileProps{
    emp:IEmployee;
    handleEdit:(emp:IEmployee)=>void

    }


const Etile:React.FC<EmployeeTileProps>=({emp,handleEdit})=>{
    return(
        <div className="tile" onClick={()=>handleEdit(emp)}>
        <span className="image" ><img src={emp.img} alt="" onError={(e)=>{(e.target as HTMLImageElement).src='/default.png'}}/></span>
        <span>
            <h6>{emp.name}</h6>
            <p>{emp.jobTitle}</p>
            <p>{emp.department}</p>
            <span>
                <FontAwesomeIcon className="icons" icon={faSquarePhone}/>

                <FontAwesomeIcon className="icons" icon={faEnvelope}/>

                <FontAwesomeIcon className="icons" icon={faComment}/>

                <FontAwesomeIcon className="icons" icon={faStar}/>

                <FontAwesomeIcon className="icons" icon={faHeart}/>
            </span>
        </span>                            
    </div>
    )
}

export default Etile;