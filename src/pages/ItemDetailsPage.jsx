import { Link } from "react-router-dom";
import List from "../components/List";
import ListItem from "../components/ListItem";
import { useParams } from "react-router-dom";
import itemsData from "../data/products.json";

function ItemDetailsPage() {
  const { itemId } = useParams();
  const itemDetails = itemsData.find((item) => item.id === parseInt(itemId));

  console.log(itemId);

  return (
    <div className="details">
      <h1>Item Details Page</h1>
      <div>
        {itemDetails && (
          <>
            <img src={itemDetails.image} />
            <h1>
              {itemDetails.brand} {itemDetails.description}
            </h1>

            {/* Back button */}
            <Link to="/">
              <button className="">Back</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemDetailsPage;
