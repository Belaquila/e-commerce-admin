import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import List from "./components/List";
import items from "./data/products.json";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useState } from "react";

function App() {
  const [itemsToDisplay, setItemsToDisplay] = useState(items);

  // function to delete items
  const deleteItem = (itemId) => {
    console.log("called for " + itemId);
    const newArray = itemsToDisplay.filter((item) => {
      return item.id !== itemId;
    });
    setItemsToDisplay(newArray);
    console.log("set new array done ...");
  };

  // function add to create and update the state
  const addItem = (item) => {
    setItemsToDisplay((prevItems) => {
      const newItem = { ...item, id: prevItems.length + 1 };
      return [newItem, ...prevItems];
    });
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
        <Route path="/item/:itemId" element={<ItemDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Sidebar />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
