import React from 'react';
import Raiting from '../pages/assets/raiting.svg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItemById } from '../redux/cartSlise';

const PostPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const cartItem = useSelector(selectCartItemById(id));
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const CartProduct = {
      details,
    };
    dispatch(addItem(CartProduct));
  };

  console.log(onClickAdd);
  

  useEffect(() => {
    async function fetchDetails() {
      try {
        const { data } = await axios.get('https://6283ee0438279cef71de493c.mockapi.io/blogs/' + id);
        setDetails(data);
      } catch (error) {
        alert('Ошибка при получении!');
      }
    }
    fetchDetails();
  }, [id]);

  if (!details) {
    return <h1 className="loading"> loading...</h1>;
  }

  const onClickBy = () => {
    alert('olla, chika, youre  ' + details.price + '$');
  };

  return (
    <div className="card_details" id={details.id}>
      <div className="details">


        <div className="details_content">
          <div className="shoe_view">
            <img className="details_image" src={details.imageUrl} />
          </div>
        </div>

        <div className="details_copy">
          <h3>{details.raiting}</h3>
          <span className="details_id">{details.productCode}</span>
          <p className="headline">{details.category}</p>
          <h1>{details.name} </h1>
          <p>{details.description}</p>
          <div className="sum">{details.price}</div>
          <div className="stars">
            <div className="ratings_revieww">
              <div className="r_count">77 Reviews</div>
              <div className="stars">
                <img src={Raiting} alt="" />
              </div>
            </div>
          </div>

       
          <button className="buttonOne" onClick={onClickBy}>
            buy in one click{details.price}$
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
