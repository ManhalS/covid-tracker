import React, { useState,useEffect } from 'react';
import {Button} from "react-bootstrap"
import'bootstrap/dist/css/bootstrap.min.css'

function Searchbar(props) {

    
    const {onSearch}= props;
    const [searchText, setsearchText]= useState("")
    const [global , setGlobal ]= useState({})
    
    
    const handleInput=(e)=>{
      
        setsearchText(e.target.value)
        console.log(searchText)
    }
   
    function handlesubmit() {
        fetch(searchText)
       
    }
    
useEffect(()  =>fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${searchText}`)
.then(res=> res.json())
.then((data) => {
    setGlobal( data)
    console.log(data)
    
   
  }),[])
  

   
    //     )
    // const handleEnterKeyPressed =(e)=>{
    //     if (e.key === "Enter"){
    //         onSearch(searchText)
    //     }
    // }


    return (
        <div className="Search">
      
      {searchText.country}
             <label id= "label">Search BY Country :</label><input type= "text" onChange={handleInput}  value={searchText} placeholder ="country name"></input>
             < Button onClick={handlesubmit}> submit</Button>
         
        </div>
    );
}
 
export default Searchbar;

