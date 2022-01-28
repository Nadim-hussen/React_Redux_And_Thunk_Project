
import { SET_PRODUCTS , SET_PRODUCT} from "../actions/type.js";
const initialState =[]

// const changeNumber = (state = initialState,{type,payload})=>{
// switch(type){
//     case "fetch_data" : return {...state, product:payload}
//     default: return state;
// }
// }
// export default changeNumber

export const reducer=(state=initialState,action)=>{

    switch (action.type) {
        case SET_PRODUCTS:
          return [...action.payload];
        
        default:
          return state;
      }

}
export const product=(state=initialState,action)=>{

  switch (action.type) {
      case SET_PRODUCT:
        return action.payload;
      default:
        return state;
    }

}

