const quantityParagraph = document.getElementById("paragraphQuantity");
const increaseButton = document.getElementById("increase");
let shoppingCart = [];
// let counter = 0;


const addToCart = async (cartId, productId, prodName) => {
  try {
    const res = await fetch(`/api/cart/${cartId}/products/${productId}`, { method: 'POST' });
    Toastify({
      text: `"You added ${prodName}"`,
      duration: 2000,
      className: "info",
      style: {
        background: "linear-gradient(to right, #ffd700, #ffff00)",
        color: "black"
      }
    }).showToast();

    shoppingCart.push(productId)
    localStorage.setItem('cart', JSON.stringify(shoppingCart))
  } catch (error) {
    console.log(error)
  }

};

// const getProdsStorage = JSON.parse(localStorage.getItem('cart'));

// function increaseQuantity(prodId){
//   const inCart = getProdsStorage.some(prod => prod === prodId);
//   if(inCart){
//     let prod = getProdsStorage.map(prod =>{
//         if(parseInt(prod) === parseInt(prodId)){
//           quantityParagraph.innerText = counter++
//         }
//       })
//   }
// }

const removeFromCart = async (cartId, productId) => {
  try {
    const res = await fetch(`/api/cart/${cartId}/products/${productId}`, { method: 'DELETE' })
    if (res.status != 200) {
      return "error"
    }
    const el = document.getElementById(productId)
    el.parentElement.removeChild(el)
    localStorage.removeItem(productId)
  } catch (err) {
      console.log(err)
  }
};


const deleteAllOrders = async()=>{
  const res = await fetch(`/admin/orders`, { method: 'DELETE' });
  if (res.status != 200) {
    return "error"
  }
};

