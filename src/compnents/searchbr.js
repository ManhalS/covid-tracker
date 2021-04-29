import React, { useState } from 'react';

function Searchbar(props) {

    const {onSearch}= props;
    const [searchText, setsearchText]= useState("")
    const handelInput=(e)=>{
        const text=e.target.value
        setsearchText(text)
    }
    const handleEnterKeyPressed =(e)=>{
        if (e.key === "Enter"){
            onSearch(searchText)
        }
    }
    return (
        <div>
             <label>Search BY Country :</label><input type= "text" onChange={handelInput} onKeyPress={handleEnterKeyPressed} value={searchText} placeholder ="country name"></input>
             < button> submit</button>
        </div>
    );
}

export default Searchbar;