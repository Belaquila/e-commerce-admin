import { Link } from "react-router-dom";
import List from "../components/List";
import Form from "../components/Form";

function DashboardPage(props) {
  console.log(props);

  return (
    <>
      <Form addItem={props.addItem} />
      <List
        itemsToDisplay={props.itemsToDisplay}
        deleteItem={props.deleteItem}
      />
    </>
  );
}

export default DashboardPage;
