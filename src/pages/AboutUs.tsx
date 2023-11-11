import { useState, useEffect, useRef } from 'react';
import {motion, AnimatePresence } from 'framer-motion';

	const imageList = [
			{img: `./brit.png`, title: "title 1"},
			{img: `./hands.jpg`, title: "title 2"},
			{img: `./healthy.png`, title: "title 3"},
			{img: `./bedside.jpg`, title: "title 4"},
			{img: `./nap.png`, title: "title 5"},
		];


	const AboutUs = () => {
	const [currentSlide, setCurrentSlide] = useState(0);


	useEffect(() => {

		const interval = setInterval(()=> {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % imageList.length);
			setInitialLoad(false)
		}, 3000);

		return () => clearInterval(interval);
	}, [])
		const largetext = `Looking for a compassionate and experienced personal caregiver to support your loved ones? Look no further! I am a dedicated and certified caregiver with an impressive 15-plus years of experience in the field. Since 2009, I have been honing my skills, specializing in home care, trauma support, and critical care.
			My passion for caregiving stems from a deep commitment to providing the highest level of care and comfort to those in need. Over the years, I have gained valuable expertise in handling various situations, ensuring that your loved ones receive the best care possible.
			Whether it's assisting with daily activities, offering a caring presence during challenging times, or providing specialized attention for critical care patients, I am well-equipped to handle it all. Your loved one's well-being and happiness are my top priorities.
			I understand that inviting a caregiver into your home requires trust, and I aim to build that trust through open communication and genuine care. I approach each individual with respect and empathy, creating a nurturing and supportive environment that fosters healing and recovery.
			Feel free to reach out to me to discuss your unique caregiving needs and how I can be of assistance. Together, we can ensure the best possible care for your loved ones, enabling them to lead fulfilling lives and promoting a positive and caring environment. Let's embark on this journey of care and support together!`
		const [expanded, setExpanded] = useState(false);
		const toggleExpand = () => {
    		setExpanded(!expanded);
  		};

	return (
		<div className="aboutus" style={{textAlign: "center"}}>
			<h2>About Us</h2>
		 <div className="carousel">
			 <div className="simple-carousel">
					<img style={{padding: "0 10%"}} key={currentSlide} src={imageList[currentSlide].img} />
		    </div>

      	</div>
			<p >

			</p>
			{expanded ? (
					<p style={{padding: "0 10%"}} >{largetext}</p>
					) 
				: (
					<p style={{padding: "0 10%"}}>
						{largetext.slice(0,300)}
						{largetext.length > 300 && "..."}
					</p>
					)}
				<div style={{cursor: "pointer"}} onClick={toggleExpand}>
		        	{expanded ? 'Less...' : 'More...'}
		      	</div>
		</div>
		);
}

export default AboutUs;