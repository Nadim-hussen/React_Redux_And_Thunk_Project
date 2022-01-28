import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchOne } from '../actions/index';
import { useParams, NavLink } from "react-router-dom";
import '../App.css';
function Edit() {

  let { id } = useParams();
  const myData = useSelector((state) => state.product)
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchOne(`https://fakestoreapi.com/products/${id}`))
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-5 d-flex justify-content-center align-items-center flex-column">
      <div className=''>
        <NavLink className="text-decoration-none navigate" to="/">Click</NavLink>
      </div>
      <div className='mt-5'>
        <div className='mb-2 img'>
          <img className='img-content' src={`${myData.image}`} alt="product" />
        </div>
        <div className='mb-2 ml'>
          <h4><span className='font-bold'>Title &nbsp; : &nbsp; </span>{myData.title}</h4>
        </div>
        <div className='mb-2 center-item ml'>
          <p className='font'><span className='font-bold'> Description  &nbsp; : &nbsp;</span>{myData.description}</p>
        </div>
        <div className='mb-2 ml'>
          <p className='font'> <span className='font-bold'>Price &nbsp; = &nbsp;</span>  ${myData.price}</p>
        </div>

      
      </div>
    </div>
  );
}

export default Edit;