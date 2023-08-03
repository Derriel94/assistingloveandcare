import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./../pages/Home.tsx";
import Services from "./../pages/Services.tsx";
import AboutUs from "./../pages/AboutUs.tsx";
import Contact from "./../pages/Contact.tsx";

const RouterNav = () => {
	// change route paths to help with seo

	return (
			<Routes>
				<Route path="/" element={<Navigate to='home'/>} />
				<Route path="/services" element={<Services />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/home" element={<Home/>} />
	      	</Routes>
		);
};

export default RouterNav;