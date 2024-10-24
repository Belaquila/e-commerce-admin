import React from "react";
import itemsData from "../data/products.json";
import ListItem from "./ListItem";
import {Link} from "react-router-dom";



function List(){

    return(
        <div className="item">
                {itemsData.map((item, index)=>{
                    return(
                        <>
                            <ListItem product={item} index={index}/>
                        </>
                    )
                    
            })}
        </div>
    )
}


export default List;
