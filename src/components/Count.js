import { useDispatch,useSelector } from 'react-redux';
import { fetchUser} from '../actions/index';
import {  useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
function Count() {
  
   const myState = useSelector((state)=>state.reducer)
    const dispatch = useDispatch();
    function showData(){
      dispatch(fetchUser('https://fakestoreapi.com/products'))
    }
     
      useEffect(() => {
    
      showData()
         //eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      
 
  
    return (
      <div className="Count">
        <div className='container d-flex justify-content-center mx-auto row mt-5'> 
        
        <h3 className="shop-header mb-5 text-center">latest Products Shop Now</h3>
        
          {
            
      
         myState.map((curElem)=>{
            return(
              <div className="card col-md-4 mb-3 mx-3" key={curElem.id}>
              <img src={curElem.image} className="card-img-top img-fluid" alt="clothes" />
              <div className="card-body">
                <h5 className="card-title">{curElem.category}</h5>
                <p className="card-text">{curElem.title}</p>
                <NavLink to={`edit/${curElem.id}`} className="btn btn-primary">${curElem.price}</NavLink>
              </div>
            </div>
            )
          }
          
          )
          
          }


        </div>
     
      </div>
    );
   
   
 
}

export default Count;