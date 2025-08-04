import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './Pages/home/Home';
import Cart from './Pages/cart/Cart';
import Placeorder from './Pages/placeorder/Placeorder';
import { useState, useEffect } from 'react';
import Login from './components/login/Login';
function App() {
  const [showlogin, setShowlogin] = useState(false)
  useEffect(() => {
    document.body.classList.toggle('no-scroll', showlogin);
  }, [showlogin]);
  return (
    <>
      {showlogin?<Login showlogin={setShowlogin}/>:<></>}
      <div className="App">
        <Navbar showlogin={setShowlogin}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeorder/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
