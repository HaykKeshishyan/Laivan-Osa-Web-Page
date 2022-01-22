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
import Orders from "./components/main/orders/Orders";

export const AppContext = React.createContext({})

const App = (props = []) => {
  const [models, setModels] = React.useState([])
  const [addedModels, setAddedModels] = React.useState([])
  const [cartOpend, setCartOpend] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const totalPrice = addedModels.reduce ((sum,  obj) => obj.price + sum, 0)


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
    <AppContext.Provider value={{ models, addedModels, isLoading, setCartOpend, setAddedModels }}>
      <div className="app-wrapper clear">
      <Cart
        totalPrice = {totalPrice}
        removeAdded={(id) => removeAdded(id)}
        addedModels={addedModels}
        onClose={() => setCartOpend(false)}
        cartOpend = {cartOpend}
      />
      <Navbar />
      <Header
        onOpen={() => setCartOpend(true)}
        totalPrice={totalPrice}
      />
      <Routes>
        <Route path='About'
          element={<About />} />
        <Route path='Shop'
          element={<Shop
            addToCart={(obj) => addToCart(obj)}
             />}
        />
        <Route path='News'
          element={<News />} />
        <Route path='Orders'
          element={<Orders />} />
      </Routes>
      <Footer />
    </div>
    </AppContext.Provider>
  );
}

export default App;
