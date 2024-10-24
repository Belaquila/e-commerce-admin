
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import List from "./components/List";
import data from "./data/products.json";
import {Routes, Route} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<DashboardPage />} />
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



