import { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // prepare the details about the new item except the id that will be done later
    const itemDetails = {
      title: title,
      description: description,
      price: price,
      rating: rating,
    };

    props.addItem(itemDetails);

    // clear form
    setTitle("");
    setDescription("");
    setPrice("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Title */}
      <div className="dashboard-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="product name here"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>

        {/* Description */}
        <label>
          Description :
          <input
            type="text"
            name="desription"
            placeholder="product description here"
            required={true}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>

        {/* Rating */}
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            placeholder="9"
            required={true}
            min={1}
            max={10}
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
        </label>

        {/* Price */}
        <label>
          Price:
          <input
            type="number"
            name="price"
            placeholder="999.00"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>

        <button>Create</button>
      </div>
    </form>
  );
}
export default Form;
