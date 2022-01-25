import React from "react";
import style from './Card.module.scss'
import ContentLoader from "react-content-loader"

const Card = (props) => {
  const [isAdded, setIsAdded] = React.useState(false)
  const [image, setImage] = React.useState(props.picture ? props.picture[0] : "")
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
            speed={1}
            width={940}
            height={413}
            viewBox="0 0 940 413"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
          >
            <rect x="0" y="275" rx="0" ry="0" width="109" height="72" /> 
            <rect x="125" y="275" rx="0" ry="0" width="109" height="72" /> 
            <rect x="250" y="275" rx="0" ry="0" width="109" height="72" /> 
            <rect x="0" y="0" rx="0" ry="0" width="358" height="240" /> 
            <rect x="630" y="0" rx="0" ry="0" width="150" height="23" /> 
            <rect x="485" y="45" rx="0" ry="0" width="454" height="310" /> 
            <rect x="0" y="375" rx="0" ry="0" width="50" height="16" /> 
            <rect x="0" y="391" rx="0" ry="0" width="96" height="20" /> 
            <rect x="295" y="380" rx="0" ry="0" width="159" height="25" /> 
            <rect x="625" y="380" rx="0" ry="0" width="100" height="25" /> 
            <rect x="905" y="385" rx="0" ry="0" width="20" height="20" />
          </ContentLoader>
        </> :
        <>
        <div className={style.cardContent}>
          <div className={style.photos}>
            <img className={style.modelPhoto} width={357} height={240} src={image} alt="model" />
            <div>
              {props.picture.map((e) => {
                return (
              <img key={e} className={style.modelPhoto} width={109} height={72} src={e} alt="model" onClick={() => setImage(e)} />

                )
              })}
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


