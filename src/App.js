import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header/header.component";
import Homepage from "./pages/homepage/homepage.component";

export default class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Routes>
					<Route path='/' element={<Homepage />} />
				</Routes>
			</>
		);
	}
}
