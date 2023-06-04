import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop' 
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from './screens/homeScreen/HomeScreen';
import SeeScreen from './screens/see/See.jsx';
import CategoryScreen from './screens/categoryScreen/CategoryScreen';
import ProductScreen from './screens/productScreen/ProductScreen';
import SearchScreen from './screens/SearchScreen'
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/see' element={<SeeScreen />} />
        <Route path='/product/:id' element={<CategoryScreen />} />
        <Route path='/singleProduct/:id' element={<ProductScreen />} />
        <Route path='/search/:keyword' element={<SearchScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
