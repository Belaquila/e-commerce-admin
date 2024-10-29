import React from "react";
import ListItem from "./ListItem";

function List(props) {
  return (
    <div className="flex flex-row flex-wrap " >
      {props.itemsToDisplay.map((item, index) => {
        return (
          <ListItem className="" key= {index} item={item} deleteItem={props.deleteItem} />
        );
      })}
    </div>
  );
}

export default List;
