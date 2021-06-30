import React,{useEffect, useRef} from 'react';

import { products } from './data/data';

import './scroll.css';

import picture from './wave.svg'

import useWindowSize from "./hooks/useWindowSize";



function ScrollApp() {


//Hook to grab window size
const size = useWindowSize();

// Ref for parent div and scrolling div
const app = useRef();
const scrollContainer = useRef();

// Configs
const data = {
  ease: 0.1,
  current: 0,
  previous: 0,
  rounded: 0
};

// Run scrollrender once page is loaded.
useEffect(() => {
  requestAnimationFrame(() => skewScrolling());
}, []);

//set the height of the body.
useEffect(() => {
  setBodyHeight();
}, [size.height]);

//Set the height of the body to the height of the scrolling div
const setBodyHeight = () => {
  document.body.style.height = `${
    scrollContainer.current.getBoundingClientRect().height
  }px`;
};

// Scrolling
const skewScrolling = () => {
  //Set Current to the scroll position amount
  data.current = window.scrollY;
  // Set Previous to the scroll previous position
  data.previous += (data.current - data.previous) * data.ease;
  // Set rounded to
  data.rounded = Math.round(data.previous * 100) / 100;

  // Difference between
  const difference = data.current - data.rounded;
  const acceleration = difference / size.width;
  const velocity = +acceleration;
  const skew = velocity * 20.5; // kontrolises koliko se krivi

  //Assign skew and smooth scrolling to the scroll container
  scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

  //loop vai raf
  requestAnimationFrame(() => skewScrolling());
};


  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        {products.map((item, index) => {
          {
            console.log(item);
          }

          return (
            <div key={index} className="img-container">
              <img className="image" src={item.image} alt="" />

              <h1 className="title">hello world</h1>
            </div>
          );
        })}
      </div>
      <section>
        
      
        <img className='wave' src={picture} alt='' />

        </section>  

    </div>
  );
}

export default ScrollApp;
