import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";


function ListItem(props){
    
    //const itemId = useParams()

//console.log(props);



    return(
        <div className="item" key={props.item.id}>
            <p>{props.item.title}</p>
            <p>{props.item.id}</p>
            <button onClick={() => props.deleteItem(props.item.id)}>Delete</button>
            <Link to={`/item/${props.item.id}`}>View Details</Link>

        </div>
        )    
}



export default ListItem;