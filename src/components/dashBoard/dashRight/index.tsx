import React from "react";
import Buttons from "./buttonsAtoZ";
import Search from "./searchBox";
import Emps from "./employeeContainer";
import './style.css'
import IEmployee from '../../../config/IEmployee'



interface DashRightProps {
    employeesData:IEmployee[];
        handleClick:(s:string,filterValue:string)=>void;
        handleOpen:()=>void;
        handleEdit:(emp:IEmployee)=>void;
        handleFilter:(s:string)=>void;
        getFilterValue:()=>string
  }


const Dashright:React.FC<DashRightProps>=({employeesData,handleFilter,handleClick,handleOpen,handleEdit,getFilterValue})=>{

    return(
        <div className="dashr">
        <Buttons handleClick={handleClick} getFilterValue={getFilterValue}/>
        <Search handleFilter={handleFilter} handleClick={handleClick} handleOpen={handleOpen} getFilterValue={getFilterValue}/>
        <div>
            <p><b>Note:</b> Please use the advanced filter options to refine your results</p>
        </div>
        <Emps employeesData={employeesData} handleEdit={handleEdit}/>
        </div>
    )
}

export default Dashright;