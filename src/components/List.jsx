import React from "react";
import ListItem from "./ListItem";

function List(props) {
  return (
    <div className="dashboard-items" >
      {props.itemsToDisplay.map((item, index) => {
        return (
          <>
            <ListItem className="dashboard-item" key= {index} item={item} deleteItem={props.deleteItem} />
          </>
        );
      })}
    </div>
  );
}

export default List;
