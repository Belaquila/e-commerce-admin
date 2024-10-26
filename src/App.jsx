import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import items from "./data/products.json";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useState } from "react";
import ItemUpdatePage from "./pages/ItemUpdatePage";
import { useNavigate } from "react-router-dom";

function App() {
  const [itemsToDisplay, setItemsToDisplay] = useState(items);

  const navigate = useNavigate();

  // function to delete items
  const deleteItem = (itemId) => {
    const newArray = itemsToDisplay.filter((item) => {
      return item.id !== itemId;
    });
    setItemsToDisplay(newArray);
  };

  // function add to create and update the state
  const addItem = (item) => {
    setItemsToDisplay((prevItems) => {
      const newItem = { ...item, id: prevItems.length + 1 };
      return [newItem, ...prevItems];
    });
  };


  // we need here a function to save updatedItem and we get back to the DetailsPage
  const handleSaveUpdatedItem = (updatedItem) => {
    setItemsToDisplay((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    navigate(`/item/${updatedItem.id}`); // Navigate back to the details page after saving
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <DashboardPage
              itemsToDisplay={itemsToDisplay}
              deleteItem={deleteItem}
              addItem={addItem}
            />
          }
        />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/item/:itemId" element={<ItemDetailsPage itemsToDisplay={itemsToDisplay} />} />
        <Route path="/itemUpdate/:itemId" element={<ItemUpdatePage itemsToDisplay={itemsToDisplay} saveUpdatedItem={handleSaveUpdatedItem} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Sidebar />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
