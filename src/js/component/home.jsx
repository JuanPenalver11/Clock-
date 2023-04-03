import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

function Secundero(props) {
	return (
	  <div className="counterHolder">
		<div className="calendar">
		  <i class="fa-regular fa-clock"></i>
		</div>
		<div className="days"><h1>Days</h1>{props.digitDays}</div>
		<div className="hours"><h1>Hours</h1>{props.digitHours}</div>
		<div className="minutes"><h1>Minutes</h1>{props.digitMinutes}</div>
		<div className="seconds"><h1>Seconds</h1>{props.digitSeconds}</div>
	  </div>
	);
  }
export default Secundero;
