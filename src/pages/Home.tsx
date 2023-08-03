import { GiSelfLove } from 'react-icons/gi';
const Home = () => {


	return (
		<div>
			<h2 style={{textAlign: "center"}}>Assisting Love and Care</h2>
			<div className="home-top-section">
				<div>
					<p>24/7 Services Provideing Love & Care</p>
					<p>Owned and Operated By: Brittany Nunn</p>
				</div>
				<img className="home-img" src="./hands.jpg"/>
			</div>
			<div className="home-middle-section-aboutus">
				<div id="home-aboutus-title">About Us</div>
				<p>Experienced, certified personal caregiver since 2009 with 15+ years of expertise in 
					home, trauma, and critical care. 
					Committed to providing compassionate support and top-quality care for your loved ones. 
					Trustworthy and empathetic, ensuring a nurturing environment.
					Let's discuss your unique needs!
				</p>
			</div>
			<div className="home-bottom-section-services">
				<h2 style={{textAlign: "center"}}>Our Services</h2>
				<div style={{display: "flex", justifyContent: "space-around"}}>
					<h3>Compassion and Love</h3>
					<h3>Service Area: Central Texas</h3>
				</div>
				<img className="home-img" src="./bedside.jpg"/>
				<h3 style={{textAlign: "center"}}>Why Choose Home Care?</h3>
				<div className="home-service-box-container">
					<div className="home-service-box">
						<GiSelfLove id="icon"/>
						<div>Skilled Care Services</div>
					</div>
					<div className="home-service-box">
						<GiSelfLove id="icon"/>
						<div>-None Medical Services-</div>
					</div>
					<div className="home-service-box">
						<GiSelfLove  id="icon" />
						<div>-Client Benefits-</div>
					</div>
				</div>
			</div>
		</div>
		);
}

export default Home;