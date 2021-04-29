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
            <div className ="State">
               <h3> state:{state.state}</h3>
               <h3> cases:{state.cases}</h3>
               <h3>  total Death:{state.deaths}</h3>

            </div>
        )
          
    }
    )
      console.log(stateInfo)

            
            return(
                <div className ="Usinfo">
                    
                    {stateInfo}
                </div>
                
            )
        
        }  
    // }

export default CoState;