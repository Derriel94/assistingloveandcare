import {useState} from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
	
	const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false);
	const [menuName, setMenuName] = useState<string>('Menu');
	const switchMobileNav = () => {
    if (displayMobileNav == false) {
      setDisplayMobileNav(true)
      setMenuName(`Close`)
    	} else {
      	setDisplayMobileNav(false)
      	setMenuName("Menu")
    	}
  	}


	return (
		<div>
			<motion.button onClick={switchMobileNav} className="mobilenavbutton">{menuName}</motion.button>
			{displayMobileNav
			?
			<motion.div 
			className="mobilenav">
				<motion.div
					initial={{x:-90,}}
      		animate={{x: 0}}
      		exit={{x: -90}}
      		transition={{delay: .3, duration: .5}}>
					<NavLink id="NavLink"to="/">Home</NavLink>
				</motion.div>
				<motion.div
					initial={{x:-90}}
      		animate={{x: 0}}
      		exit={{x: -90}}
      		transition={{delay: .5, duration: .5}}>
					<NavLink  id="NavLink"to="/aboutus">About Us</NavLink>
				</motion.div>
				<motion.div
				  initial={{x:-90}}
      		animate={{x: 0}}
      		exit={{x: -90}}
      		transition={{delay: .7, duration: .5}}>
					<NavLink  id="NavLink"to="/services">Services</NavLink>
				</motion.div>
				<motion.div
				  initial={{x:-90}}
      		animate={{x: 0}}
      		exit={{x: -90}}
      		transition={{delay: .7, duration: .5}}>
					<NavLink  id="NavLink"to="/contact">Contact</NavLink>
				</motion.div>
			</motion.div>
			:
			<div className="nav">
				<div>
					<NavLink id="NavLink"to="/">Home</NavLink>
				</div>
				<div>
					<NavLink id="NavLink"to="/aboutus">About Us</NavLink>
				</div>
				<div>
					<NavLink id="NavLink"to="/services">Services</NavLink>
				</div>
				<div>
					<NavLink id="NavLink"to="/contact">Contact</NavLink>
				</div>
			</div>
			}
		</div>
		);
};

export default Nav;