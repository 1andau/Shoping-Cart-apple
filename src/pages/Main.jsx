import React from 'react'
import { useNavigate } from 'react-router-dom';
import sneakers from './assets/sneakers.png'


const Main = () => {
const navigate = useNavigate(); 

  return (
    <div className="container">
      <section className="home" id="home">
        <div className="content_home">
          <h3>Nike show</h3>
          <p>
            Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 stays true
            to its roots with the iconic Waffle sole, stitched overlays and classic TPU accents.
          </p>

          <div className="buttons" onClick={() => { navigate('/Home');}} >
            <button className="btn-hover color">GO TO COLLECTION</button>
          </div>


        </div>
        <img className="sneakers" src={sneakers} alt="sneakers" />
      </section>
    </div>
  );
}

export default Main