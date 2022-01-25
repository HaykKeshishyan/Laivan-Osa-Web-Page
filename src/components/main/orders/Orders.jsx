import axios from "axios";
import React from "react";
import style from './Orders.module.scss'
import { AppContext } from "../../../App";
import OrdersCard from "./ordersCard/OrdersCard";

const Orders = () => {
    const {isLoading} = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        (async () => {
          try{
            const {data= []} = await  axios.get('https://61b8b44138f69a0017ce5cd7.mockapi.io/orders');
            setOrders(data.map((obj) => obj.items).flat())
          } catch (error) {
            alert('Sorry, there is some error ;(')
            console.error(error);
          }
        })();
    }, [])

    const orderedElement = () => {
        return (isLoading ? [...Array(5)].map(card => <OrdersCard
          loading={isLoading}
        />) : orders.map(card => <OrdersCard
          key={card.model}
          id={card.id}
          picture={card.picture}
          model={card.model}
          price={card.price}
          loading={isLoading}
        />))
      }

    return (
        <div className={style.content}>
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Orders</h1>
      </div>
      <div className={style.cards}>
          {orderedElement()}
      </div>
    </div>
    )
}

export default Orders