
import { SET_PRODUCTS , SET_PRODUCT} from "./type.js";


export const fetchUser=(url)=>{
    return async function(dispatch){
         
         const res = await  fetch(url)
         const data = await res.json();
        //    dispatch(setProducts(data.products));
           dispatch({ type:SET_PRODUCTS, payload: data })
        }
    }
    export const fetchOne=(url)=>{
      return async function(dispatch){
           
           const res = await  fetch(url)
           const data = await res.json();
          //    dispatch(setProducts(data.products));
             dispatch({ type:SET_PRODUCT, payload: data })
          }
      }

    export const setProducts = (products = null) => {
        if (products) {
          return {
            type: SET_PRODUCTS,
            payload: products,
          };
        }
    }
    export const setProduct = (product = null) => {
      if (product) {
        return {
          type: SET_PRODUCT,
          payload: product,
        };
      }
  }
// export const fetchData = (data) =>{
//     return {
//         type:"fetch_data",
//         payload: data
//     }
// }


