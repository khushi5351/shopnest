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

import Register from './pages/user/Register.jsx';
import Home from './pages/user/Home.jsx';
import Login from './pages/user/Login.jsx';
import Navuser from './components/Navuser.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AddCategory from './pages/Addcategory.jsx';
import About from './pages/user/About.jsx';
import Product from './pages/user/Product.jsx';
import Men from './pages/user/Men.jsx';
import Women from './pages/user/Women.jsx';
// import Coupons from './pages/Coupons.jsx';
// import Reviews from './pages/Reviews.jsx';

function App() {
  return (
    <Router>
     
         
          <div className="page-content">
            <Routes>
              <Route path="/Login" element={<><Header/><Login/><Footer/></>} />
              <Route path="/Register" element={<><Header/><Register/><Footer/></>} />
              <Route path="/Product" element={<><Header/><Product/><Footer/></>} />
              <Route path="/Home" element={<><Header/><Home/><Footer/></>} />
              <Route path="/About" element={<><Header/><About/><Footer/></>} />
              <Route path="/Men" element={<><Header/><Men/><Footer/></>} />
              <Route path="/Women" element={<><Header/><Women/><Footer/></>} />
              <Route path="/Dashboard" element={<><Sidebar /> <Navbar /><Dashboard /></>} />
              <Route path="/Addproduct" element={<><Sidebar /> <Navbar /><Addproduct /></>} />
              <Route path="/Products" element={<><Sidebar /> <Navbar /><Products /></>} />
              <Route path="/Addcategory" element={<><Sidebar /> <Navbar /><AddCategory/></>} />
              <Route path="/Categories" element={<><Sidebar /> <Navbar /><Categories /></>} />
              <Route path="/Orders" element={<><Sidebar /> <Navbar /><Orders /></>} />
              <Route path="/Users" element={<><Sidebar /> <Navbar /><Users /></>} />
              {/* <Route path="/Reviews" element={<Reviews />} /> */}
              {/* <Route path="/Coupons" element={<Coupons />} /> */}
            </Routes>
          </div>
    </Router>
  );
}

export default App;
