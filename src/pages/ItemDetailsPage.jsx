import { Link, useParams, useNavigate } from "react-router-dom";

function ItemDetailsPage(props) {

  const { itemId } = useParams();
  console.log(itemId.toString())

  const item = props.itemsToDisplay.find((item) => item.id.toString() === itemId);

  const navigate = useNavigate(); // nice option

  return (
    <div className="dashboard">
      <h1> {item.title}</h1>
      <div>
        {item && (
          <>
            {/* will be written differently ... to list all properties dynamically */}
            <p><strong>id : </strong> <span>{item.id}</span> </p>
            <p><strong>title : </strong><span>{item.title}</span> </p>
            <p><strong>description : </strong> <span>{item.description}</span> </p>
            <p><strong>price : </strong> <span>{item.price}</span> </p>
            <p><strong>discountPercentage : </strong> <span>{item.discountPercentage}</span> </p>
            <p><strong>rating : </strong> <span>{item.rating}</span> </p>
            <p><strong>stock : </strong> <span>{item.stock}</span> </p>
            <p><strong>brand : </strong> <span>{item.brand}</span> </p>
            <p><strong>category : </strong> <span>{item.category}</span> </p>
            <p><strong>thumbnail : </strong> <span>{item.thumbnail}</span> </p>


            {/* Back button */}
            <Link to="/">
              <button className="btn-primary">Back</button>
            </Link>
            {/* Edit button that will navigate to the form for modifications */}
            <button className ="btn-secondary" onClick={() => navigate(`/itemUpdate/${item.id}`)}>Edit</button>


          </>
        )}
      </div>
    </div>
  );
}

export default ItemDetailsPage;
