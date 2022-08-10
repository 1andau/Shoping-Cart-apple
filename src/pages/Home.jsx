import React, { useState, useEffect, Fragment } from 'react';
import StoreHeader from '../filters/StoreHeader';
import SneakersBlock from './Sneakers';
import Categories from '../filters/Categories';
import styles from '../scss/components/Filters.module.scss';
import Sizes from './Sizes';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Root from '../Root';

const Home = () => {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sneakersSizes, setSneakersSizes] = useState(0);
  useEffect(() => {
    const category = categoryId > 0 ? `typeSneakers=${categoryId}` : '';
    const sizes = sneakersSizes > 0 ? `size=${sneakersSizes}` : '';

    axios.get(`https://6283ee0438279cef71de493c.mockapi.io/blogs?${category}${sizes}`)
      .then((res) => {
        setSneakers(res.data);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sneakersSizes]);

console.log(categoryId);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>

      <StoreHeader />
<Root/>
      <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />

      <Sizes value={sneakersSizes} onClickSize={(i) => setSneakersSizes(i)} />

      <div>
        <Fragment>
          {loading ? (
            <img
              src="https://career.alliedvision.com/persis/images_avt/gicccccphy.gif"
              alt="loader"
              className={styles.loader}
            />
          ) : (
            <>
              <span className={styles.products_length}>{sneakers.length} Product(s) found.</span>

              {sneakers.length === 0 ? (
                <p className="text-center"></p>
              ) : (
                <section className="products_container">
                  <div className="containerSneakers">
                    <div className="grid_view">
                      {sneakers.map((obj) => (
                        <Link className='links' key={obj.id} to={`/details/${obj.id}` }>
                        <SneakersBlock key={obj.id} {...obj} />
                       </Link>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </>
        )} 
        </Fragment>
      </div>
    </div>
  );
};

export default Home;
