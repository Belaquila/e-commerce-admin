import React from "react";
import ListItem from "./ListItem";
import {Link} from "react-router-dom";



function List(props){

// itemsToDisplay={itemsToDisplay} 

//console.log(props)
//const result = props.itemsToDisplay;
//console.log(result.length)

    return(
        <div className="item">
                {props.itemsToDisplay.map((item, index)=>{
                    return(
                        <>
                            <ListItem item={item} index={index} deleteItem = {props.deleteItem}/>
                        </>
                    )
                    
            })}
        </div>
    )
}


export default List;
