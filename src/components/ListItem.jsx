import React, { useState } from "react";


function ListItem({product, index}){
    

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
        </div>
        )    
}

export default ListItem;