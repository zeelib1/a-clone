// Modules
import React,{useState, useEffect} from "react";

// Components
import Product from "./Product";
import HomeLoginBox from "./HomeLoginBox";

// Images private hosting (relative path), absolute path here
import {imageSource} from './imageSource';

// Styles and icons
import "../styles/Home.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const initialState = 0;
function Home() {
  const [imageCounter, setImageCounter] = useState(initialState)

  useEffect(()=> {
    setInterval(()=> {
      setImageCounter(Math.floor(Math.random() * (5 - 0) + 0))
    }, 3000)
  }
  , [])
  
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image home__imageBackground-2"
          src={imageSource[imageCounter]}
          alt="home-background"
        />
        <div className="carousel__arrowHandling">
          <ArrowBackIosIcon className="carousel__backArrow" onClick={()=>setImageCounter(Math.floor(Math.random() * (5 - 0)) + 0)} />

          <ArrowForwardIosIcon className="carousel__forwardArrow" onClick={()=>setImageCounter(Math.floor(Math.random() * (5 - 0)) + 0)} />
        </div>

        <div className="home__row">
          {/* <Product
            id={1}
            title="Learning React: Modern Patterns for Developing React Apps 2nd Edition"
            image="https://images-na.ssl-images-amazon.com/images/I/91uFdkCJmAL.jpg"
            price={19.19}
            rating={5}
            quantity={0}
          /> */}
          <Product
            id={4}
            title="JavaScript: Das umfassende Handbuch. JavaScript lernen und verstehen. Inkl. objektorientierter und funktionaler Programmierung (German) Hardcover – September 1, 2018 "
            image="https://images-na.ssl-images-amazon.com/images/I/71vK5rVUBtL.jpg"
            price={45.19}
            rating={5}
            quantity={0}
          />
          <Product
            id={4}
            title="Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming "
            image="https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg"
            price={25.19}
            rating={5}
            quantity={0}
          />
          <Product
            id={4}
            title="Moralischer Fortschritt in dunklen Zeiten: Universale Werte für das 21. Jahrhundert (German Edition) Kindle Edition "
            image="https://m.media-amazon.com/images/I/51DYB+5S1tL.jpg"
            price={19.19}
            rating={5}
            quantity={0}
          />
          <div className="home__raw sponsor__sidebar">
            <HomeLoginBox />
            <img
              className="sponsor__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/01/ape/fallback/static/GB_GC_GW_backup_._V278268465_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="The Art of Computer Programming, Volumes 1-4A Boxed Set 1st Edition "
            image="https://rpodyssey.files.wordpress.com/2017/06/img10.jpg"
            price={130.99}
            rating={3}
            quantity={0}
          />
          <Product
            id={6}
            title="Suddenly In the Depths of the Forest Hardcover – 18 Feb. 2010 "
            image="https://images-na.ssl-images-amazon.com/images/I/51dKwILxu+L._SX323_BO1,204,203,200_.jpg"
            price={12.9}
            rating={4}
            quantity={0}
          />

          <Product
            id={5}
            title="
            CSS: The Definitive Guide: Visual Presentation for the Web 4th Edition"
            image="https://images-na.ssl-images-amazon.com/images/I/81HX7jFq9AL.jpg"
            price={35.19}
            rating={2}
            quantity={0}
          />
        </div>
        <div className="home__row">
          <Product
            id={2}
            title="You Don't Know JS Yet: Get Started Kindle Edition "
            image="https://images-na.ssl-images-amazon.com/images/I/B14vD2o4sDS._SY300_.png"
            price={12.97}
            rating={4}
            quantity={0}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
