import React, { useState } from "react";

const Pagination = (props,pagenumber, setPageNumber) =>{
    const numberofpage = [1, 2, 3, 4, 5];
    const changePageNumber = (e) =>{
        var temp = e.target.value;
        console.log('temp', temp);
        props.setPageNumber(temp);
    }
    return(
        <ul>
            {numberofpage.map((e, index)=>(
                <li><button key={e} value={e} onClick={changePageNumber}>{e}</button></li>
            ))}
        </ul>
    )
}

export default Pagination;