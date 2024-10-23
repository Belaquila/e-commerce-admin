import React from "react";
import data from "../data/products.json";

function List(){
    console.log(data)
    return(
        <div className="item">
                {data.map((item, index)=>{
                    return(
                    <div key={index}>
                        <p>{item.title}</p>
                        <p>{item.id}</p>
                    </div>
                    )            
            })}
        </div>
    )
}


export default List;