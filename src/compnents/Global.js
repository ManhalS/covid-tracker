import React from 'react';
import { useEffect, useState } from "react";

function Global(searchText) {
    
    const [Global , setGlobal ]= useState()
    useEffect(()  => fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${searchText}`)
    .then(res=> res.json())
    .then((data) => {
       setGlobal( data)
        console.log(data)
        
       
    }),[])
    return (
        <div>
            
        </div>
    );
    }     
export default Global;



