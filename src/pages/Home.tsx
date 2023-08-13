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
			<h2>Testimonials</h2>
			<div className="review-section">

				<div className="review">
				
					"I met Brittany Through my local laywer. She is a sweet heart.
					She was so kind and loving to me. She provided medical transportaion
					for me after I had hip surgery, and wasnt able to drive. She came and
					took me and was friendly. She made me feel good and not think about
					the pain I was in. She loves her clients and is very professional. I was
					in her care for over 6 months and after her care she still would check up
					on me!" - Caroline Kadom
					<div><img src="fivestars.png" /></div>
				</div>
				
				<div className="review">
					
					"During my father’s final few months, life became harder for 
					him each day. Despite his many challenges, Brittney was one 
					of the few things that brought him joy. She was so kind, 
					thoughtful and generous. She always went the extra mile for 
					my dad and our family. Her thoughtfulness made our final 
					journey with my father a joyful and peaceful celebration." - Sally and Jay White	
					<div><img src="fivestars.png" /></div>
				</div>
				

			</div>
		</div>
		);
}

export default Home;