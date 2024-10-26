import List from "../components/List";
import Form from "../components/Form";
import React from 'react';

function DashboardPage(props) {
  
  return (
    <div className="dashboard">
      
      <Form className="dashboard-form" addItem={props.addItem} />
      <List className="dashboard-items"
        itemsToDisplay={props.itemsToDisplay}
        deleteItem={props.deleteItem}
      />
    </div>
  );
}

export default DashboardPage;
