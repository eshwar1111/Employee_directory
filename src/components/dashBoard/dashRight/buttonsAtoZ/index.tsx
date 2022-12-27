import React, { useEffect,useState } from "react";
import './style.css'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ButtonsProps{
    handleClick:(s:string,filterValue:string)=>void;
    getFilterValue:()=>string
}


const Buttons:React.FC<ButtonsProps>=({handleClick,getFilterValue})=>{
    var Chapter = "A".charCodeAt(0);
    let buttons:string[]=[]
    for(let i = 0; i < 26; i++) {
        buttons.push(String.fromCharCode(Chapter+i))
    }
    return (
          <div id="buttons">
            <button onClick={()=>handleClick('',getFilterValue())}><FontAwesomeIcon className="bicon" icon={faUser}/></button>
            {buttons.map((buttonLabel, i) => (
              <button onClick={()=>handleClick(buttonLabel,getFilterValue())} >
                {buttonLabel}
              </button>
            ))}
        </div>

    );
      
}


export default Buttons;