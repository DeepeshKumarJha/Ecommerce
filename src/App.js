import React from "react";
import "./App.css";
import Header from "./header/header.component";
import Homepage from "./pages/homepage/homepage.component";

export default class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Homepage />
			</>
		);
	}
}
