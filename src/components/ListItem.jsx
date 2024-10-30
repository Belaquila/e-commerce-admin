import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";




function ListItem(props) {

    const [isItemIdShown, setIsItemIdShown] = useState(false);

    // Toggle function to show/hide the full id witch too long
    const toggleItemId = () => {
        setIsItemIdShown(!isItemIdShown);
    };


    return (
        <div className="card" key={props.item.id}>

            <p >{props.item.title}</p>
            <p >Price: {props.item.price}</p>
            <p >Rating: {props.item.rating}</p>
            <p onClick={toggleItemId}>
                {isItemIdShown ? props.item.id.toString() : `${props.item.id.toString().substring(0, 3)}...`}
            </p>
            <button className="btn-primary spacing-xs" onClick={() => props.deleteItem(props.item.id)}>Delete</button>
            <Link className="btn-secondary spacing-sm" to={`/item/${props.item.id}`}>View Details</Link>

        </div>
    )
}



export default ListItem;



