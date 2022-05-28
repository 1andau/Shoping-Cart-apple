import React from 'react'
import Button from './Button';
import Eye from '../pages/assets/heart.svg'
import Category from './Category';
import axios from 'axios';
import { useEffect, useState } from 'react';


const SneakersBlock = ({id, name, price, description, imageUrl}) => {


  return (
      

        <div className="Card_container">
          <div className="card">
            <img
              className="sneakers__image"
              src={imageUrl}
              alt="anime__picture"
            />
            <h2>{name}</h2>

            <img className="icons" src={Eye} alt="heart" />
            <div className="content">
              <h1>{price}$</h1>

              <Button className="button--add" outline>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>

                <span> Add to cart </span>
              </Button>
            </div>

            
          </div>
        </div>
  );
}

export default SneakersBlock