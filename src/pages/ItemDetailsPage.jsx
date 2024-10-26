import { Link, useParams, useNavigate } from "react-router-dom";

function ItemDetailsPage(props) {

  const { itemId } = useParams();

  const item = props.itemsToDisplay.find((item) => item.id === parseInt(itemId));

  const navigate = useNavigate(); // nice option

  return (
    <div className="details">
      <h1>Item Details Page</h1>
      <div>
        {item && (
          <>
            {/* will be written differently ... to list all properties dynamically */}
            <h2>{item.id}</h2>
            <h2>{item.title}</h2>
            <h2>{item.description}</h2>
            <h2>{item.price}</h2>
            <h2>{item.discountPercentage}</h2>
            <h2>{item.rating}</h2>
            <h2>{item.stock}</h2>
            <h2>{item.brand}</h2>
            <h2>{item.category}</h2>
            <h2>{item.thumbnail}</h2>


            {/* Back button */}
            <Link to="/">
              <button className="">Back</button>
            </Link>
            {/* Edit button that will navigate to the form for modifications */}
            <button onClick={() => navigate(`/itemUpdate/${item.id}`)}>Edit</button>


          </>
        )}
      </div>
    </div>
  );
}

export default ItemDetailsPage;
