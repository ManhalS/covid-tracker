import React from 'react';
import { useEffect, useState } from "react";
import le2311 from "../compnents/image/le2311.jpg"
import Document from "../compnents/image/Document.jpg"
function Global(searchText) {
    
    return (
        <div>
            <img className="pic1" src ={le2311} width ="500" alt="info"/>
            <img className="pic2" src ={Document} width ="500" alt="info2"/>

        </div>
    );
    }     
export default Global;



