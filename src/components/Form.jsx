import { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");




  const handleSubmit = (e) => {
    e.preventDefault();

    // prepare the details about the new item except the id that will be done later
    const itemDetails = {
      title: title,
      description: description,
      price: price,
      discountPercentage: discountPercentage,
      rating: rating,
      stock: stock,
      brand: brand,
      category: category,
      thumbnail: thumbnail,

    };

    props.addItem(itemDetails);

    // clear form
    setTitle("");
    setDescription("");
    setPrice("");
    setDiscountPercentage("");
    setRating("");
    setStock("");
    setBrand("");
    setCategory("");
    setThumbnail("");

  };

  return (
    <form onSubmit={handleSubmit}>

      {/* Title */}
      <div>
        <label className="label">
          Title:
          <input
            type="text"
            name="title"
            placeholder="Product name here"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>

        {/* Description */}
        <label>
          Description :
          
            <textarea
              type="text"
              name="desription"
              placeholder="Description here"
              required={true}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
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

        {/* Discount percentage */}
        <label>
          Discount percentage:
          <input
            type="number"
            name="price"
            placeholder="0"
            min={0}
            max={100}
            value={discountPercentage}
            onChange={(e) => {
              setDiscountPercentage(e.target.value);
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

        {/* Stock */}
        <label>
          Stock:
          <input
            type="number"
            name="stock"
            placeholder="91"
            required={true}
            min={0}
            value={stock}
            onChange={(e) => {
              setStock(e.target.value);
            }}
          />
        </label>

        {/* Brand */}
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            placeholder="myBrand"
            required={true}
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          />
        </label>

        {/* Category */}
        <label>
          Category:
          <input
            type="text"
            name="category"
            placeholder="smartphones"
            required={true}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </label>

        {/* Thumbnail */}
        <label>
          Thumbnail:
          <input
            type="number"
            name="thumbnail"
            placeholder="https://img.com"
            value={thumbnail}
            onChange={(e) => {
              setThumbnail(e.target.value);
            }}
          />
        </label>


        <button className="btn-primary">Create</button>
      </div>
    </form>
  );
}
export default Form;
