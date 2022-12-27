import React from "react";
import { useState ,useEffect} from 'react'
import Dashleft from "./dashLeft";
import Dashright from "./dashRight";
import './style.css';
import IEmployee from '../../config/IEmployee'
import Addmodal from "./addModal";
import Editmodal from "./editModal";




const getEmployees=()=>{
  try{
    let employees=JSON.parse(localStorage.getItem("employees") || "")
    return employees
  }
  catch(e){
    return []
  }
}



const Dash:React.FC=()=>{

    var newEmployees:IEmployee[]=[]

    var employeesData:IEmployee[]=getEmployees()
    
    const [filterValue,setFilterValue]=useState("name")

    const [employees,setEmployees]=useState(employeesData)

    const [isAdd,setisAdd]=useState(false)

    const [isEdit,setisEdit]=useState(false)

    const[currentId,setCurrentId]=useState({
      "firstName":"Emma",
      "lastName": "Green",
      "img":"",
      "email":"green@gmail.com",
      "name":"Emma Green",
      "jobTitle" :"BI Devlopement",
      "office":"India",
      "department":"IT",
      "phoneNumber":"123445566",
      "skype":"abc",
      "id":2, 
    })


    const handleFilter=(s:string)=>{
      setFilterValue(s)
    }
    const getFilterValue=()=>{
      return filterValue;
    }

    const handleClick=(s:string,filterValue:string)=>{
        var newStr=s.toLowerCase()
        newEmployees=[];
        employeesData?.length>0 && 
          employeesData.map((emp)=>{
              var compareValue=""
              if (filterValue=="name"){
                compareValue=emp.name.toLowerCase()
              }
              if (filterValue=="office"){
                compareValue=emp.office.toLowerCase()
              }
              if (filterValue=="department"){
                compareValue=emp.department.toLowerCase()
              }
              if (filterValue=="lastName"){
                compareValue=emp.lastName.toLowerCase()
              }
              if (filterValue=="jobTitle"){
                compareValue=emp.jobTitle.toLowerCase()
              }

              if(compareValue.startsWith(newStr)){
                newEmployees.push(emp)
              }
          })
        setEmployees(newEmployees);
      }


    const handleAdd=()=>{ 
      const form:any=document.querySelector("form")
      const data=Object.fromEntries(new FormData(form).entries())
      console.log(data)
      var fisrtName=data.firstName as string
      var name=fisrtName.concat(data.lastName as string)
      var newObj:IEmployee={"firstName":data.firstName as string , "lastName":data.lastName as string ,"img":data.img as string ,"email":data.email as string , "name":name ,"jobTitle":data.jobTitle as string,"office":data.office as string , "department":data.department as string, "phoneNumber":data.phoneNumber as string ,"skype":data.skype as string ,"id":employeesData.length+1}
      employeesData.push(newObj)
      updatelocalStorage(employeesData)
      setEmployees(employeesData);
      handleOpen();
    }

    const handleOpen=()=>{
      setisAdd(!isAdd)
    }

    const handleisEdit1=()=>{
      setisEdit(false)
    }

    const handleEdit=(emp:{ firstName: string; lastName: string; img: string; email: string; name: string; jobTitle: string; office: string; department: string; phoneNumber: string; skype: string; id: number; })=>{
      setisEdit(!isEdit)
      setCurrentId(emp)
    }

    const handleUpdate=(n:number)=>{
      var ti=0;
      for(let i=0;i<employeesData.length;i++){
        if(employeesData[i].id==n){
          ti=i;
          break;
        }
      }
      const form:any=document.querySelector("form")
      const data=Object.fromEntries(new FormData(form).entries())
      var fisrtName=data.firstName as string
      var name=fisrtName.concat(data.lastName as string)
      var newObj:{ firstName: string; lastName: string;img: string; email: string; name: string; jobTitle: string; office: string; department: string; phoneNumber: string; skype: string; id: number; }=
      {"firstName":data.firstName as string , "lastName":data.lastName as string ,"img":data.img as string ,"email":data.email as string , "name":name ,"jobTitle":data.jobTitle as string,"office":data.office as string , "department":data.department as string, "phoneNumber":data.phoneNumber as string ,"skype":data.skype as string ,"id":n}
      employeesData[ti]=newObj;
      updatelocalStorage(employeesData)
      setEmployees(employeesData)
      setisEdit(!isEdit)
    }

    const updatelocalStorage=(employeesData:IEmployee[])=>{
        localStorage.setItem("employees",JSON.stringify(employeesData))
    } 
      
    return(
        <div className="dash">
            <Dashleft handleClick={handleClick} />
            <Dashright employeesData={employees} handleFilter={handleFilter} getFilterValue={getFilterValue} handleClick={handleClick} handleOpen={handleOpen} handleEdit={handleEdit}/>
            <Addmodal isOpen={isAdd} handleAdd={handleAdd} handleOpen={handleOpen}/>
            <Editmodal isEdit={isEdit} handleUpdate={handleUpdate} emp={currentId} handleisEdit1={handleisEdit1}/>
        </div>
    )
}

export default Dash;