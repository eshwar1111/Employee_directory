import React from 'react'
import './style.css'

interface AddModalProps{
    isOpen:boolean;
    handleAdd:()=>void;
    handleOpen:()=>void
}



const Addmodal:React.FC<AddModalProps>=({isOpen,handleAdd,handleOpen})=>{
    if(isOpen){
        return <div className='modal'>
            <div className='modalHeader'><h5>Add Employee</h5></div>
            <form id='myForm' onSubmit={(e)=>{e.preventDefault(),handleAdd()}}>
                <label htmlFor="">First Name</label>
                <input type="text" name='firstName' required/>
                <label htmlFor="">last Name</label>
                <input type="text" name='lastName' required />
                <label htmlFor="">Upload Image</label>
                <input type="text" name='img' required/>
                <label htmlFor="">Email</label>
                <input type="email" name="email" required />
                <label htmlFor="">Job title</label>
                <input type="text"   name="jobTitle" required/>
                <label htmlFor="">Office</label>
                <input type="text" name="office"  required/>
                <label htmlFor="">department</label>
                <input type="text" name="department" required />
                <label htmlFor="">Phone number</label>
                <input type="number" name="phoneNumber" pattern="[1-9]{1}[0-9]{9}" required/>
                <label htmlFor="">Skype id</label>
                <input type="text" name='skype' required/>
                <div className="modalButtons">
                <button className='submit' type="submit">submit</button>
                <button className="close" onClick={()=>handleOpen()}>close</button>
                </div>
            </form>
            </div>
    }
    else{
        return null
    }
}

export default Addmodal;