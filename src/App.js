import "bulma/css/bulma.css";
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/add" className="navbar-item">Add New Fruit</Link>
            <Link to="/about" className="navbar-item">About</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;







