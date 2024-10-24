import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";


function ListItem({product, index}){
    
    const productCheck = useParams()

    //const {itemId} = useParams();

    //const item = itemsData.find((item) => item.id === parseInt(itemId)); 

    console.log(productCheck)


    const [isRendered, setRendred] = useState(true);
    
    const deleteItem = () => {
        return setRendred(false);
    }

    if (!isRendered) {
        return null;
    }

    return(
        <div className="item" key={index}>
            <p>{product.title}</p>
            <p>{product.id}</p>
            <button onClick={() => deleteItem(product.id)}>Delete</button>
            <Link to={`/item/${product.id}`}>View Details</Link>

        </div>
        )    
}



export default ListItem;