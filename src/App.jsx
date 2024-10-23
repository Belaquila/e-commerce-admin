
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import List from "./components/List";
import data from "./data/products.json";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <List data={data}/>
      <Footer />
    </div>
  );
}

export default App;



