import React from "react";
import Navbar from "./navbar"
import Jumbotron from "./jumbotron/jumbotron"
import Card from "./card/card"
import CardImg from "./card/cardImg"
import CardBody from "./card/cardBody"
import CardFooter from "./card/cardFooter"
import Footer from "./footer"
import { obras } from "../data.js"



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
			<Jumbotron title="INTI" text="<<  imaginario Latinoamericano alrededor del mundo" button="BIOGRAFÍA"/>
			<div className="row" >
				{obras.map((obra) => {
				return (
					<div className="col-md-3 py-2" key={obra.id}>
						<Card>
							<CardImg img imagen={obra.photo} />
							<CardBody className={"card-body"}>
								<p className="card-text mb-0">{obra.name}</p>
								<p className="card-text">{obra.place}</p>
							</CardBody>
							<CardFooter>
								<p className="m-2">{obra.footer}</p>
							</CardFooter>
						</Card>
					</div>
				)
			})};
			</div>
			</div>
			<hr/>
			<Footer />
		</>)
};

export default Home;
