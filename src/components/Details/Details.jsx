import Bullet from "../Bullet/Bullet";
import AQIData from "./Data";
import Advice from "../Advice/Advice";
import "./Details.css";

function Details(props) {
	//   return <div>{props.val}</div>;
	console.log(props);
	if (props.okay === false) {
		return (
			<div className="details">
				<p className="details-loc">City Not Found</p>
				<img src={AQIData.err.image} alt="" />
				<Advice okay={props.okay} />
			</div>
		);
	}
	let AQIIndex = props.Pval.main.aqi - 1;
	return (
		<>
			<div className="details">
				<p className="details-loc">
					{props.Wval.name}, {props.Wval.sys.country}
				</p>
				<img src={AQIData.main[AQIIndex].image} alt="" width="100px" />
				<p className="details-AQI">Air Quality Index:</p>
				<p className="details-AQIValue">{AQIData.main[AQIIndex].AQI}</p>
			</div>
			<Bullet Pval={props.Pval} temp={props.Wval.main.temp} />
			<Advice okay={props.okay} AQIIndex={AQIIndex} />
		</>
	);
}

export default Details;
