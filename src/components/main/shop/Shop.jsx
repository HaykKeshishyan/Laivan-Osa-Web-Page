import React from "react";
import style from './Shop.module.scss'
import { AppContext } from "../../../App";
import Card from "./card/Card";

const anasunBanEmMtaceBaycXuyEgoEsInchaGrac = [ 1,2,3,4,5]

const Shop = (props) => {
  const { models, isLoading} = React.useContext(AppContext)

  const cardElement = () => {
    return (isLoading ? anasunBanEmMtaceBaycXuyEgoEsInchaGrac.map(card => <Card key={card}
      loading={isLoading}
    />) : models.map(card => <Card
      key={card.model}
      addToCart={props.addToCart}
      id={card.id}
      picture={card.picture}
      model={card.model}
      price={card.price}
      about={card.about}
      loading={isLoading}
    />))
  }

  return (
    <div className={style.content}>
      <div className="d-flex align-center justify-between mb-40">
        <h1>All Models</h1>
      </div>
      <div className={style.cards}>
        {cardElement()}
      </div>
    </div>
  )
}

export default Shop;