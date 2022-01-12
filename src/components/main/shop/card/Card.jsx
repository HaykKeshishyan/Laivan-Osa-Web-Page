import React from "react";
import style from './Card.module.scss'
import ContentLoader from "react-content-loader"

const Card = (props) => {
  const [isAdded, setIsAdded] = React.useState(false)

  const addToCart = () => {
    setIsAdded(!isAdded);
    props.addToCart({ id: props.id, model: props.model, price: props.price, picture: props.picture, })
  }

  const add = () => {
    
  }

  return (
    <div className={style.card} >
      {props.loading ?
        <>
          <ContentLoader
            speed={2}
            width={278}
            height={241}
            viewBox="0 0 278 307"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="-1" rx="0" ry="0" width="218" height="145" />
            <rect x="0" y="168" rx="0" ry="0" width="120" height="15" />
            <rect x="0" y="205" rx="0" ry="0" width="50" height="15" />
            <rect x="0" y="219" rx="0" ry="0" width="73" height="15" />
            <rect x="202" y="219" rx="0" ry="0" width="16" height="16" />
          </ContentLoader>
        </> :
        <>
          <img className={style.modelPhoto} width={218} height={145} src={props.picture} alt="model" />
          <h5>Model: {props.model}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price</span>
              <b>{props.price} amd</b>
            </div>
            <img className={style.plus}
              onClick={addToCart}
              width={16} height={16}
              src={isAdded ? "/img/mark-btn.svg" : "/img/add-btn.svg"}
              alt="Add" />
          </div>
        </>}

    </div>
  )
}

export default Card;