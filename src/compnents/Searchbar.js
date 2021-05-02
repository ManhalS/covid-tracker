import React, { useState,useEffect } from 'react';


function Searchbar(props) {

    
    const {onSearch}= props;
    const [searchText, setsearchText]= useState("")
    const [global , setGlobal ]= useState({})
    
    const handleInput=(e)=>{
      
        setsearchText(e.target.value)
        console.log(searchText)
    }
    function handlesubmit() {
        console.log("button is working")
        fetch(searchText)
}

useEffect(()  =>fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${searchText}`)
.then(res=> res.json())
.then((data) => {
    setGlobal( data)
    console.log(data)
    
   
  }),[])

    // useEffect(()  =>{

    //     fetch()
    // }
    //     )
    // const handleEnterKeyPressed =(e)=>{
    //     if (e.key === "Enter"){
    //         onSearch(searchText)
    //     }
    // }

    // const country = global?.map (conte =>{
    return (
        <div className="Search">
           
             <label id= "label">Search BY Country :</label><input type= "text" onChange={handleInput}  value={searchText} placeholder ="country name"></input>
             < button onClick={handlesubmit}> submit</button>
           
        </div>
    );
}
    // )}
export default Searchbar;

