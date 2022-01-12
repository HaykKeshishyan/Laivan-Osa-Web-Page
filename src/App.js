import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/main/about/About";
import News from "./components/main/news/News";
import Shop from "./components/main/shop/Shop";
import Navbar from "./components/navbar/Navbar";

const App = (props = []) => {
  const [models, setModels] = React.useState([])
  const [addedModels, setAddedModels] = React.useState([])
  const [cartOpend, setCartOpend] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);


  const addToCart = (obj) => {
    if (addedModels.find((item) => Number(item.id) === Number(obj.id))) {
      setAddedModels(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post('https://61b8b44138f69a0017ce5cd7.mockapi.io/cart', obj)
      setAddedModels(prev => [...prev, obj])
    }
  }


  const removeAdded = (id) => {
    axios.delete(`https://61b8b44138f69a0017ce5cd7.mockapi.io/cart/${id}`)
    setAddedModels(prev => prev.filter(model => Number(model.id) !== Number(id)))
  }



  React.useEffect(() => {
    async function fetchData() {
      const cardResponse = await axios.get('https://61b8b44138f69a0017ce5cd7.mockapi.io/models');     
      const cartResponse = await axios.get('https://61b8b44138f69a0017ce5cd7.mockapi.io/cart');
      
      setIsLoading(false);

      setAddedModels(cartResponse.data)
      setModels(cardResponse.data)
    }

    fetchData();
  }, []);


  return (
    <div className="app-wrapper clear">
      {cartOpend ? <Cart
        removeAdded={(id) => removeAdded(id)}
        addedModels={addedModels}
        onClose={() => setCartOpend(false)}
      /> : null}
      <Navbar />
      <Header
        onOpen={() => setCartOpend(true)}
      />
      <Routes>
        <Route path='About'
          element={<About />} />
        <Route path='Shop'
          element={<Shop
            addToCart={(obj) => addToCart(obj)}
            models={models}
            isLoading={isLoading} />}
        />
        <Route path='News'
          element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
