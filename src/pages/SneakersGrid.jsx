import React, { useState, useEffect, Fragment } from 'react';
import Filters from '../filters/Filters';
import {data} from '../data/data'; 
import StoreHeader from '../filters/StoreHeader';
import Sizes from '../filters/Sizes';
import filterList from '../filters/FilterList';
import SneakersBlock from './Sneakers';

const SneakersGrid = ({customer}) => {    
    const [sneakers, setSneakers] = useState(data);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, [customer]);
      
        const setSize = (size) => {
          const newSizes = [...selectedSizes];
          if (newSizes.includes(size)) {
            const index = newSizes.indexOf(size);
            newSizes.splice(index, 1);
          } else {
            newSizes.push(size);
          }
          setSelectedSizes(newSizes);
          setSneakers(filterList(newSizes, 'size'));
        };

        const filterItem = (event) => {
            const newItem = data.filter((newVal) => {
              return newVal.typeSneakers === event;
            });
            setSneakers(newItem);
          };



  return (
    <div>

      <StoreHeader />

      <Filters filterItem={filterItem} setSneakers={setSneakers} />

      <div>
        <Sizes setSize={setSize} selectedSizes={selectedSizes} />

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
                        <SneakersBlock key={i} product={product} />
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </>
          )}
        </Fragment>
      </div>
    </div>  )
}

export default SneakersGrid