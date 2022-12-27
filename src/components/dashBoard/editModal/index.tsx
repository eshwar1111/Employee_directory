import React from "react";
import './style.css';
import IEmployee from '../../../config/IEmployee'

interface EditModalProps{
    isEdit:boolean;
    handleUpdate:(n:number)=>void;
    emp:IEmployee;
    handleisEdit1:()=>void;
}



const Editmodal:React.FC<EditModalProps>=({isEdit,handleUpdate,emp,handleisEdit1})=>{
    if(isEdit){
        return <div className='modal'>
            <div className='modalHeader'><h5>Edit Employee</h5></div>

            <form id='myForm' onSubmit={(e)=>{e.preventDefault(),handleUpdate(emp.id)}}>
                <label htmlFor="">First Name</label>
                <input type="text" defaultValue={emp.firstName} name='firstName' required/>
                <label htmlFor="">last Name</label>
                <input type="text" defaultValue={emp.lastName} name='lastName' required />
                <label htmlFor="">Upload Image</label>
                <input type="text" defaultValue={emp.img} name='img' required/>
                <label htmlFor="">Email</label>
                <input type="email" defaultValue={emp.email} name="email" required />
                <label htmlFor="">Job title</label>
                <input type="text"  defaultValue={emp.jobTitle} name="jobTitle" required/>
                <label htmlFor="">Office</label>
                <input type="text" defaultValue={emp.office} name="office"  required/>
                <label htmlFor="">department</label>
                <input type="text" defaultValue={emp.department} name="department" required />
                <label htmlFor="">Phone number</label>
                <input type="number" defaultValue={emp.phoneNumber} name="phoneNumber" pattern="[1-9]{1}[0-9]{9}" required/>
                <label htmlFor="">Skype id</label>
                <input type="text"  defaultValue={emp.skype} name='skype' required/>
                <div className="modalButtons">
                <button className="submit" type="submit">save</button>
                <button className="close" onClick={()=>handleisEdit1()}>close</button>
                </div>
            </form>
            </div>
    }
    else{
        return null
    }
}

export default Editmodal;