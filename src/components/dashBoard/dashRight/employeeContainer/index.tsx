import React from "react";
import './style.css'
import Etile from './employeeTile'
import IEmployee from '../../../../config/IEmployee'


interface EmployeeDataProps {
    employeesData:IEmployee[];
    handleEdit:(emp:IEmployee)=>void;
  }

const keys = Object.keys(localStorage)
// for (let key of keys){
//     console.log(key,"okkk",localStorage.getItem(key));
// }
const Emps:React.FC<EmployeeDataProps>=({employeesData,handleEdit})=>{
    return(
        <div className="empBox">
        <div className="emp_section">
            {employeesData?.length>0 && 
            employeesData.map((emp)=>{
                return(
                    <div>
                        <Etile emp={emp} handleEdit={handleEdit}/>
                    </div>
                )
            })
            }

            {employeesData?.length==0 &&
                <div>\\ No Results \\</div>
            }
        </div>
        </div>
    )
}

export default Emps;