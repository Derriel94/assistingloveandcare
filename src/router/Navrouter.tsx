import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./../pages/Home.tsx";
import Services from "./../pages/Services.tsx";

const Navrouter = () => {
	// change route paths to help with seo

	return (
			<Routes>
				<Route path="/" element={<Navigate to='home'/>} />
				<Route path="/services" element={<Services />} />
		      	<Route path="/home" element={<Home/>} />
	      	</Routes>
		);
}

export default Navrouter;