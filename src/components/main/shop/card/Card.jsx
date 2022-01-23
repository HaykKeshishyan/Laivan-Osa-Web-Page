import React from "react";
import style from './Card.module.scss'
import ContentLoader from "react-content-loader"

const Card = (props) => {
  const [isAdded, setIsAdded] = React.useState(false)

  const addToCart = () => {
    setIsAdded(true);
    props.addToCart({ id: props.id, model: props.model, price: props.price, picture: props.picture, })
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }


  return (
    <div className={style.card} >
      <div className={`${style.overlay} ${isAdded ? style.overlayVisible : ''}`} >
        <img className={style.drawer} src="/img/mark.png" alt="mark" width={300} height={300} />
    </div>
      {props.loading ?
        <>
          <ContentLoader
            speed={2}
            width={278}
            height={241}
            viewBox="0 0 278 240"
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
        <div className={style.cardContent}>
          <div className={style.photos}>
            <img className={style.modelPhoto} width={357} height={240} src={props.picture[0]} alt="model" />
            <div>
              <img className={style.modelPhoto} width={109} height={72} src={props.picture[1]} alt="model" />
              <img className={style.modelPhoto} width={109} height={72} src={props.picture[2]} alt="model" />
              <img className={style.modelPhoto} width={109} height={72} src={props.picture[3]} alt="model" />
            </div>
          </div>
          <div>
            <a className={style.modelName}>Model: {props.model}</a>
            <p className={style.about}>
              {props.about[0]}
            </p>
            <p className={style.about}>
              The contents of the box including:  plywood, sandpaper, toothpicks, paraffin wax, thread
            </p>
          </div>
        </div>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price</span>
              <b>{props.price} amd</b>
            </div>
            <div className="d-flex align-center">
              <img src="/img/resize.png" width={25} height={25} alt="size" />
              {props.about[1]}
            </div>
            <div className="d-flex align-center">
              <img src="/img/detail.png" width={30} height={30} alt="size" />
              {props.about[2]}
            </div>
            <img className={style.plus}
              onClick={addToCart}
              width={18} height={18}
              src="/img/add-btn.svg"
              alt="Add" />
          </div>
        </>}

    </div>
  )
}

export default Card;


