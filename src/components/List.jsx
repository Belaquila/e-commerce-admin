import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

function List(props) {
  return (
    <div className="item">
      {props.itemsToDisplay.map((item, index) => {
        return (
          <>
            <ListItem item={item} index={index} deleteItem={props.deleteItem} />
          </>
        );
      })}
    </div>
  );
}

export default List;
