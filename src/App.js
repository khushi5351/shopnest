import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Addproduct from './pages/Addproduct.jsx';
import Products from './pages/Products.jsx';
import Categories from './pages/Categories.jsx';
import Orders from './pages/Orders.jsx';
import Users from './pages/Users.jsx';
// import Coupons from './pages/Coupons.jsx';
// import Reviews from './pages/Reviews.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Addproduct" element={<Addproduct />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Categories" element={<Categories />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/Users" element={<Users />} />
              {/* <Route path="/Reviews" element={<Reviews />} /> */}
              {/* <Route path="/Coupons" element={<Coupons />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
