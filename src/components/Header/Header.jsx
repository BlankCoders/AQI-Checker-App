import About from "./../About/About";
import "./Header.css";
import favicon from "./../../assets/rxns/favicon.png";
import aboutus from "./../../assets/rxns/aboutus.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
	return (
		<Router>
			<div className="header">
				<div className="name">
					<img className="favicon" src={favicon} alt="favicon" />
					<h1 className="header-title">AQI Checker App</h1>
				</div>
				<Link to="/about">
					<div className="about">
						<h1 className="header-title">About us</h1>
						<img className="favicon" src={aboutus} alt="favicon" />
					</div>
				</Link>
			</div>
			<Switch>
				<Route exact path="/about" component={About}></Route>
			</Switch>
		</Router>
	);
}

export default Header;
