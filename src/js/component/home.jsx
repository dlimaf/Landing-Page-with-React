import React from "react";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Jumbotrom from "./jumbotrom.jsx";
import Navbar from "./navbar.jsx";



function Cimiento () {
	return (
	<div>
		<div className="row">
			<Navbar/>
		</div>
		<div className="container">
		    <div className="row pb-3">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
			        <Jumbotrom/>
				</div>
		    </div>
		    <div className="d-flex justify-content-center">
			    <div className="row">
			        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"><Card/></div>
			        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"><Card/></div>
			        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"><Card/></div>
				    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"><Card/></div>
			    </div>
		    </div>
		</div>
		<div className="row">
			<Footer/>
		</div>
	</div>
	)
}


export default Cimiento;