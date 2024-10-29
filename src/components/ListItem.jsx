import React from "react";
import { Link } from "react-router-dom";


function ListItem(props){

    return(
        <div className="card w-[30vw] p-4 border-2 margin mx-2 spacing-xs flex items-center justify-center flex-col" key={props.item.id}>

            <p className="flex items-center justify-center">{props.item.title}</p>
            <p className="flex items-center justify-center">{props.item.id}</p>
            <button className="btn-primary spacing-xs" onClick={() => props.deleteItem(props.item.id)}>Delete</button>
            <Link className="btn-secondary spacing-sm" to={`/item/${props.item.id}` }>View Details</Link>

        </div>
        )    
}



export default ListItem;