import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../header/header.component";
import Login from "../pages/authentication/login.component";
import Homepage from "../pages/homepage/homepage.component";

const AllRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route index element={<Navigate to='/home' />} />
					<Route path='home' index element={<Homepage />} />
					<Route path='login' element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AllRoutes;
