//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Secundero from "./component/home.jsx";



Secundero.propTypes = {
  digitDays: propTypes.number,
  digitHours: propTypes.number,
  digitMinutes: propTypes.number,
  digitSeconds: propTypes.number
};
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  

let counter = 0;
setInterval(function () {
  const days = (Math.floor(counter/1000/600)%364);
  const hours = (Math.floor((counter / 100/60)%24));
  const minutes = (Math.floor((counter / 10/6)%60));
  const seconds = (Math.floor((counter / 1)%60));



  counter++
 
  ReactDOM.render(<Secundero   digitDays={days} digitHours={hours} digitMinutes={minutes}  digitSeconds={seconds}/>, document.querySelector("#app"));
  
}, 1000);

//render your react application



// 
// {props.hours}
// {props.minutes}
// {props.seconds}

// digitOne={counter.indexOf()} 