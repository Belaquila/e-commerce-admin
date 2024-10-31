import List from "../components/List";
import Form from "../components/Form";
import React from 'react';

function DashboardPage(props) {
  
  return (
    <div className="dashboard">
      <h2 style={{ fontWeight: 'bold',fontSize: '24px',padding: '30px' }}>Add your new product in the stock</h2>
      <div className="containerLimited">
        
      <Form className="form" addItem={props.addItem} />
      </div>
      <div className="containerList">
      <h2 style={{ fontWeight: 'bold',fontSize: '24px',padding: '30px', marginTop: '70px' }}>Current stock of products</h2>
      <List className="listItems"
        itemsToDisplay={props.itemsToDisplay}
        deleteItem={props.deleteItem}
        />
      </div>
    </div>
  );
}

export default DashboardPage;
