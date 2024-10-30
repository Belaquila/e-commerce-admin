import { useState } from "react";
import { useParams } from "react-router-dom";

function ItemUpdatePage(props) {

  const { itemId } = useParams();

  const item = props.itemsToDisplay.find((item) => item.id.toString() === itemId);

  // Initialize state dynamically based on item properties
  const [updatedItem, setUpdatedItem] = useState({ ...item });


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdatedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.saveUpdatedItem(updatedItem); // Save updated item with all modified properties
  };

  return (
    <>
    <h2 className="dashboard" style={{ fontWeight: 'bold',fontSize: '24px' }} >Update carefully item details and save changes</h2>
    <div className="form">
      
      <form onSubmit={handleSubmit}>
        {Object.keys(updatedItem).map((key) => (
          key != "id" ? (
            <label key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
              <input
                type={typeof updatedItem[key] === "number" ? "number" : "text"}
                name={key}
                value={updatedItem[key]}
                onChange={handleInputChange}
                required
              />
            </label>
          ) : (
            <p key={key}>ID: {updatedItem[key]}</p>
          )

        ))}
        <button className="btn-primary" type="submit">Save Changes</button>
      </form>
    </div>
    </>

    
  );
}

export default ItemUpdatePage;
