import React from "react";

function App() {
  return (
    <div className="app-wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2>Cart</h2>
          <div className="cart-item d-flex align-center justify-between mb-20">
            <img className="model-photo mr-20" width={109} height={72} src="/img/Eraz/Eraz2.jpg" alt="Eraz" />
            <div className="mr-20">
              <p className="mb-5">Model "Eraz"</p>
              <b>19000 amd</b>
            </div>
            <img className="remove-btn" width={18} height={18} src="/img/remove.png" alt="Model" />
          </div>
          <div className="items">
            <div className="cart-total-block">
              <ul>
                <li>
                  <span>Sum:</span>
                  <div className="mr-30"></div>
                  <b>19000 amd</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div className="mr-30"></div>
                  <b>800 amd</b>
                </li>
              </ul>
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={47} height={54} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">Laivan Osa</h3>
            <p className="opacity-5">Wooden DIY models</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/shopping-cart.png" />
            <span>1000 amd</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.png" />
          </li>
        </ul>
      </header>
      <div className="contenet p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All Models</h1>
        </div>
        <div className="card">
          <img className="model-photo" width={218} height={145} src="/img/Eraz/Eraz2.jpg" alt="Eraz" />
          <h5>Model "Eraz"</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>19 000 amd</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.png" alt="Plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
