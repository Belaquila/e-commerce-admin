import React from "react";
import data from "../data/products.json";
import ListItem from "./ListItem";


function List(){
    console.log(data)
    return(
        <div className="item">
                {data.map((item, index)=>{
                    return(
                        <ListItem product={item} index={index}/>
                    )
                    
            })}
        </div>
    )
}


export default List;