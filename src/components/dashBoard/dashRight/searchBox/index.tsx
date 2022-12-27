import React from "react";
import './style.css'

interface SearchBoxProps {
    handleFilter:(s:string)=>void;
    handleClick:(s:string,filterValue:string)=>void;
    handleOpen:()=>void;
    getFilterValue:()=>string;
  }



const Search:React.FC<SearchBoxProps>=({handleClick,handleOpen,getFilterValue,handleFilter})=>{
    var e = (document.getElementById("selected")) as HTMLSelectElement;
    var s = (document.getElementById("searchb")) as HTMLSelectElement;


    return(
        <div className="searchBox">
            <p>Search</p>
            <input id='searchb' type="text" onChange={e=>handleClick(e.target.value,getFilterValue())}/>
            <button id="clear-button" onClick={()=>{handleClick('',""),s.value=""}} >Clear</button>
            <p className="filter-p">Filter by</p>
            <div>
                <select name="filter" id="selected" onChange={()=>handleFilter(e.value)}>
                    <option className="dropdown-item" value="firstName">First Name</option>
                    <option className="dropdown-item" value="lastName">Last Name</option>
                    <option className="dropdown-item" selected value="name">Preferred Name</option>
                    <option className="dropdown-item" value="jobTitle">Title</option>
                    <option className="dropdown-item" value="office">Office</option>
                </select>
            </div>

            <button className="addBtn" type="button" onClick={()=>{handleOpen()}}>
                Add Employee
            </button>
            
        </div>
    )
}

export default Search;