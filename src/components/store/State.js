// let store = {
//     _state: {
//         shopPage: {
//             shopData : [
//                 {id: 0, model: 'Eraz', price: 19000, picture: "/img/Eraz/Eraz4.JPG",},
//                 {id: 1, model: 'Cilicia', price: 28900, picture: "/img/Cilicia/Cilicia2.JPG",},
//                 {id: 2, model: 'Tornado', price: 11500, picture: "/img/Tornado/Tornado5.JPG",},
//                 {id: 3,  model: 'U-2', price: 16900, picture: "/img/U2/u_2_2.JPG",},
//                 {id: 4, model: 'Drakkar', price: 24900, picture: "/img/Drakkar/Drakkar3.JPG",},
//             ],
//         },
//         cartPage: {
//             cartData: []
//         },
//     },
//     _render() {
//         console.log('rendered')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._render = observer;
//     },

//     dispatch(action) {
//         if(action.type === 'ADD-TO-CARD') {
//             let arr = this._state.shopPage.shopData
//             let index = arr.findIndex(i => i.id === action.item)
//             if (this._state.cartPage.cartData.length === 0) {
//                 let cartTask = {
//                     id: 0,
//                     model: this._state.shopPage.shopData[index].model,
//                     price: this._state.shopPage.shopData[index].price,
//                     picture: this._state.shopPage.shopData[index].picture,
//                 };
//                 this._state.cartPage.cartData.push(cartTask)
//             } else {
//                 let cartTask = {
//                     id: this._state.shopPage.shopData.length + 1,
//                     model: this._state.shopPage.shopData[index].model,
//                     price: this._state.shopPage.shopData[index].price,
//                     picture: this._state.shopPage.shopData[index].picture,
//                 };
//                 this._state.cartPage.cartData.push(cartTask)
//             }
//         }
//         this._render(this._state)
//     }
// }

// export default store;








// // const [models, setModels] = React.useState([])



// [{ "id": 0, "model": "Eraz", "price": 19000, "picture": "/img/Eraz/Eraz4.JPG"},
// { "id": 1, "model": "Cilicia", "price": 28900, "picture": "/img/Cilicia/Cilicia2.JPG"},
// { "id": 2, "model": "Tornado", "price": 11500, "picture": "/img/Tornado/Tornado5.JPG"},
// { "id": 3, "model": "U-2", "price": 16900, "picture": "/img/U2/u_2_2.JPG"},
// { "id": 4, "model": "Drakkar", "price": 24900, "picture": "/img/Drakkar/Drakkar3.JPG"}]
