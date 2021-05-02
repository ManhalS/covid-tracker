import React from 'react';
import {useState, useEffect} from "react"




function CoState(props) {
    const [CoState , setCoState]= useState()
  
        useEffect(()  => fetch("https://corona.lmao.ninja/v3/covid-19/states")
    .then(res=> res.json())
    .then((data) => {
        setCoState( data)
        console.log(data)
        
       
      }),[])

      console.log(CoState)
      const stateInfo = CoState?.map(state => { 
        return (
            <div >
               <h3 className ='s1'> state: {state.state}</h3>
               <h3 className ='s2'> cases: {state.cases}</h3>
               <h3 className ='s3'> total Death: {state.deaths}</h3>

            </div>
        )
          
    }
    )
      console.log(stateInfo)

            
            return(
                <div className ="Usinfo">
                    <h1 id ="hst"> States info</h1>
                    {stateInfo}
                </div>
                
            )
        
        }  
    // }

export default CoState;