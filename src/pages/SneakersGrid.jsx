import React, { useState, useEffect, Fragment } from 'react';
import {data} from '../data/data'; 
import StoreHeader from '../filters/StoreHeader';
import SneakersBlock from './Sneakers';
import AllFilters from '../filters/AllFilters';

const SneakersGrid = () => {    
    const [sneakers, setSneakers] = useState(data);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [resultsFound, setResultsFound] = useState(true);

    const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);
      

const applyFilters = () => {
let updatedList = data; 

if (selectedRating) {
  updatedList = updatedList.filter(
    (item) => parseInt(item.size) === parseInt(selectedRating)
  );
}
if (selectedCategory) {
  updatedList = updatedList.filter(
    (item) => item.typeSneakers === selectedCategory
    
  );
}

setSneakers(updatedList)
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
}

useEffect(() => {
  applyFilters();
}, [selectedRating, selectedCategory])


  return (
    <div>

      <StoreHeader />

<AllFilters 
      selectedCategory={selectedCategory}
      selectCategory={handleSelectCategory}
      selectedRating={selectedRating}
      selectRating={handleSelectRating}
/>
      <div>

        <Fragment>
          {loading ? (
            <img
              src="https://career.alliedvision.com/persis/images_avt/gicccccphy.gif"
              alt="loader"
              className="loader"
            />
          ) : (
            <>
              <span className="products-length">{sneakers.length} Product(s) found.</span>

              {sneakers.length === 0 ? (
                <p className="text-center">(</p>
              ) : (
                <section className="products_container">
                  <div className="containerSneakers">
                    <div className="grid_view">
                      {sneakers.map(( product, i) => (
                        <SneakersBlock key={i} product={product}  />
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
    
    )
}

export default SneakersGrid