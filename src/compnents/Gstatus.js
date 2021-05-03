import React from 'react';
import {useState, useEffect} from "react"
import { Card } from 'react-bootstrap';




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
        <div class="row" className= "Ginfo">
      <h1 id ="gcs">Global Covid Status </h1>
      <Card>

    <h2 class="p-3 mb-2 bg-primary text-white">cases: {Gstatus.cases} </h2>
    <h2 class="p-3 mb-2 bg-light text-dark">active cases: {Gstatus.active}</h2>
    <h2 class="p-3 mb-2 bg-danger text-white">critical:  {Gstatus.critical}</h2>
    <h2 class="p-3 mb-2 bg-success text-white" >recovered:{Gstatus.recovered}</h2>
    <h2 class="p-3 mb-2 bg-warning text-dark">Death: {Gstatus.deaths}</h2>
     
      </Card>
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