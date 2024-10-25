import { Link } from "react-router-dom"
import List from "../components/List"


function DashboardPage(props){
    return (
        <List itemsToDisplay = {props.itemsToDisplay} deleteItem = {props.deleteItem}/>
    )

}

export default DashboardPage;