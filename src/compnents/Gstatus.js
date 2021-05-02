import React from 'react';
import {useState, useEffect} from "react"




function Gstatus(props) {
    const [Gstatus , setGstatus]= useState()
  
        useEffect(()  => fetch("https://corona.lmao.ninja/v3/covid-19/all")
    .then(res=> res.json())
    .then((data) => {
        setGstatus( data)
        console.log(data)
        
       
      }),[])

      console.log(Gstatus)
      if (Gstatus){
    return (
        <div className= "Ginfo">
      <h1>Global Covid Status </h1>
      <h2>cases: {Gstatus.cases} </h2> 
      <h2>active cases: {Gstatus.active}</h2>
      <h2>critical:  {Gstatus.critical}</h2>
      <h2>Death: {Gstatus.deaths}</h2>
      <h2>recovered:{Gstatus.recovered}</h2>
        </div>

)}
        else{
            
            return(
                <div>
                    <h1> loading please wait </h1>
                </div>
            )
        
        }}

export default Gstatus;