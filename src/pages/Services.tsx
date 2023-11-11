import { useState } from "react";

const Services = () => {

	const [activeCareSelection, setActiveCareSelection] = useState(
						{name: "24hr Home Care", 
						desc: `In this type of Care arrangement, 
						our caregiver stays with the individual 
						around the clock, ensuring their safety, 
						well-being, and comfort at all times. 
						The caregiver is available 24 hours a day, 
						seven days a week(depending on arrangement), 
						providing personalized care and 
						assistance with daily activities, 
						medical needs, mobility, meal preparation, 
						medication management, and emotional support.
						This level of care is often required for individuals 
						who need constant monitoring due to age-related issues, 
						chronic illnesses, disabilities, or post-surgery recovery. 
						24-hour home care allows the person to remain in familiar 
						surroundings, preserving their independence and dignity 
						while receiving the necessary support for their specific needs. 
						It is an excellent alternative to assisted living facilities 
						or nursing homes for those who prefer to stay in 
						their homes but require ongoing care and supervision.`, 
						img: "./hands.jpg"})

	const Carelist = [{name: "24hr Home Care", 
						desc: `In this type of Care arrangement, 
						our caregiver stays with the individual 
						around the clock, ensuring their safety, 
						well-being, and comfort at all times. 
						The caregiver is available 24 hours a day, 
						seven days a week(depending on arrangement), 
						providing personalized care and 
						assistance with daily activities, 
						medical needs, mobility, meal preparation, 
						medication management, and emotional support.
						This level of care is often required for individuals 
						who need constant monitoring due to age-related issues, 
						chronic illnesses, disabilities, or post-surgery recovery. 
						24-hour home care allows the person to remain in familiar 
						surroundings, preserving their independence and dignity 
						while receiving the necessary support for their specific needs. 
						It is an excellent alternative to assisted living facilities 
						or nursing homes for those who prefer to stay in 
						their homes but require ongoing care and supervision.`, 
						img: "./hands.jpg"},
						{name: "Personal Care Assistance",
						 desc: `Our caregivers offer supportive services aimed at 
						 helping individuals with various daily activities and tasks they 
						 may struggle with due to physical or cognitive limitations. 
						 The goal is to enhance the person's quality of life, promote 
						 independence, and ensure their well-being while allowing them to 
						 remain in the comfort of their own home. `,
						 img: `./bedside.jpg`},
						 {name: "Respite Care",
						 desc: `Respite care is a vital support service designed to provide 
						 temporary relief to family caregivers who are caring for a loved one 
						 with chronic illness, disability, or other special needs. Caregiving
						  can be physically and emotionally demanding, and respite care offers
						   caregivers a temporary break from their caregiving responsibilities,
						    allowing them to rest, recharge, and attend to their own needs.`,
						 img: `./respite.png`},
						 {name: "Mobility Assistance",
						 desc: `Mobility care involves supporting individuals with limited
						  movement to enhance their independence. Our caregivers assist in 
						  activities like walking, transferring, and exercising, promoting 
						  a sense of autonomy and improving overall well-being. This specialized 
						  care addresses physical challenges, ensuring a safer and more comfortable 
						  daily life for those with mobility constraints, fostering dignity and an improved 
						  quality of life.`,
						 img: `./mobilitycare.png`},
						 {name: "Social Care",
						 desc: `Social care encompasses providing support to individuals in 
						 various aspects of their social well-being. Our caregivers facilitate 
						 social interactions, emotional support, and companionship, promoting 
						 a sense of connection and community. This care addresses emotional and 
						 relational needs, fostering mental well-being and enhancing the overall 
						 quality of life for individuals by ensuring they feel valued, 
						 understood, and socially engaged.`,
						 img: `./socialcare.png`},
						 {name: "Palliative Care",
						 desc: `Palliative care focuses on enhancing the quality of life 
						 for individuals facing serious illnesses. Care providers offer 
						 	comprehensive support, managing pain and symptoms, while 
						 addressing emotional and spiritual needs. The goal is to ensure 
						 comfort, dignity, and a sense of control for both patients 
						 and their families. Palliative care embraces a holistic approach, 
						 promoting well-being throughout the illness journey with empathy 
						 and compassion.`,
						 img: `./palliativecare.png`},
						 {name: "Laundry",
						 desc: `Laundry care involves the cleaning and maintenance of clothing and textiles. 
						 Our caregivers ensure cleanliness, proper handling, and organization of laundry items. 
						 This includes washing, drying, ironing, and folding, contributing to a hygienic and 
						 well-kept living environment. Laundry care supports personal hygiene, comfort, and a 
						 sense of order for individuals and households, reflecting attention to detail in daily life.`,
						 img: `./laundry.jpg`},
						 {name: "Meal Prep",
						 desc: `Meal preparation involves planning, cooking, and serving nutritious meals.
						  Caregivers tailor menus to dietary needs, ensuring a balanced and appetizing 
						  culinary experience. They handle food safety, portion control, and accommodate 
						  preferences or restrictions. Meal prep promotes health, convenience, and a 
						  positive dining atmosphere, contributing to overall well-being by providing 
						  nourishing and enjoyable sustenance for individuals under their care.`,
						 img: `./mealprep.png`},
						 {name: "Errands",
						 desc: `Errand care involves assisting with various tasks outside the home.
						  Caregivers manage grocery shopping, prescription pickups, 
						  and other essential errands, ensuring a well-stocked and organized living space.
						   This support enhances convenience, saves time, and meets daily needs, 
						   promoting a comfortable and stress-free environment. By handling errands, 
						   caregivers contribute to the overall efficiency and well-being of 
						   individuals they assist.`,
						 img: `./errands.jpg`},
						 {name: "Companionship",
						 desc: `Caregivers engage in meaningful conversations, share activities, 
						 and offer a friendly presence. This type of care helps alleviate loneliness, 
						 fosters a sense of connection, and contributes to mental and emotional 
						 well-being. Companionship caregivers play a vital role in enhancing the 
						 overall quality of life by creating a positive and socially fulfilling 
						 environment for those they assist.`,
						 img: `./companionship.png`},
						 {name: "Medicine Care",
						 desc: `Medicine care involves the responsible management of 
						 medications for individuals. Our caregivers ensure proper dosage, 
						 timely administration, and adherence to prescribed regimens. 
						 They organize medication schedules, monitor potential side effects, 
						 and communicate with healthcare providers as needed. This care 
						 supports health and well-being by promoting medication compliance,
						 minimizing risks, and contributing to a structured and safe 
						 healthcare routine for those under their supervision.`,
						 img: `./medicinecare.png`},
						 {name: "Light HouseKeeping",
						 desc: `Light housekeeping care involves maintaining a clean and organized 
						 living space. Our caregivers perform tasks such as dusting, vacuuming, and 
						 tidying up, contributing to a comfortable and hygienic environment. 
						 This support extends to light chores that enhance daily living, promoting 
						 a sense of order and well-being. Light housekeeping care helps individuals 
						 focus on their activities with greater ease, creating a pleasant and 
						 functional living space.`,
						 img: `./housekeeping.png`},


		];

		const careselctionSwitch = (id: number) => {
			console.log(Carelist[0])
			switch(id) {
				case 0:
					setActiveCareSelection(Carelist[0])
					break;
				case 1:
					setActiveCareSelection(Carelist[1])
					break;
				case 2:
					setActiveCareSelection(Carelist[2])
					break;
				case 3:
					setActiveCareSelection(Carelist[3])
					break;
				case 4:
					setActiveCareSelection(Carelist[4])
					break;
				case 5:
					setActiveCareSelection(Carelist[5])
					break;
				case 6:
					setActiveCareSelection(Carelist[6])
					break;
				case 7:
					setActiveCareSelection(Carelist[7])
					break;
				case 8:
					setActiveCareSelection(Carelist[8])
					break;
				case 9:
					setActiveCareSelection(Carelist[9])
					break;
				case 10:
					setActiveCareSelection(Carelist[10])
					break;
				case 11:
					setActiveCareSelection(Carelist[11])
					break;

				default:
					console.log("switch error")
					break;
			}
				
		}

		const largetext = `	Brittany is a wonderful care giver who goes above and beyond.  
					I took care of my father at night and Brittny came at 4 am so 
					I could be at work on time.  I also worked very long hours I 
					would leave at 0400, and usually not get back to relieve her 
					at 9pm.
					That is a lot to ask of a caregiver, and she always showed 
					up and was in a pleasant mood even at 4 am.  My father adored 
					her.  My father had dementia and wasn’t easy to take care of 
					and again, she went above and beyond and never complained.  
					I also found her rates very reasonable, I was expecting to 
					pay much more to ask her to come so early and stay so late.  
					I did look around at other caregiver companies and compare rates. 
					She’s worth far more than she charged.
					You can’t really put a price on your piece of mind. 
					When I had to leave my dad, I never worried or were concerned 
					that he wasn’t getting what he needed.  She fed him, occasionally 
					even cooking.  She made sure he was safe walking around on his 
					walker, she made sure he got his medicine and she had to
					occasionally clean him up.  The sicker he got, the more “accidents” 
					he had.  I think my father preferred her care to mine.
					I am not nearly sure as patient as  Brittany is.  Her care for my 
					father, and the other caregiver were a godsend.  Before I found them, 
					had no idea how I was going to keep my father out of a nursing home.  
					I had to work or we wouldn’t make it financially, and I have a great 
					job, but it‘s 2 hours away from my father’s house.
					Because of Brittney’s wonderful care, I was able to keep my 
					father in his own home (where he wanted to be) and I was able 
					to keep him from  a nursing home.  I know there are wonderful 
					nursing homes, and my father stayed in one for a few weeks.
					It was a good place, but he wanted to be home, 
					wondering around his house and fixing his flags.
					He had three flags in front of his house that were his pride and joy. He would want to be out there making sure they were clean and hanging correctly, anyway Britteny put up with him and his flag checking several times a day.  My father hardly napped or stood still. So, there was no sitting or watching tv.  Britteny had to follow him around all day making sure he didn’t fall and talking him in to eating or taking his pills.
					I know I’m writing a diatribe, but I wanted to let her future clients know what a caring and kind caregiver she is.  It easy to just say that, but I believe my detailed account’s and examples will really give you the more detailed information so you can make the right decision and choose the right caregiver for you or your loved ones.  It’s a major decision and not getting what you need can be trying, and making the wrong decision can have some detrimental effects.
					I promise that you won’t have to worry about your loved one if Brittany is who you choose. 
					My last year my father was really wonderful.  With out Britteny‘s care, I don’t think it would have been nearly as good.
					I will never forget Britteny and the other care giver’s care.  I wasn’t able to get much help from relatives for various reason’s, so Brittany and the other care givers became our family that last year.	
						- A very grateful daughter.`;
		const [expanded, setExpanded] = useState(false);
		const toggleExpand = () => {
    		setExpanded(!expanded);
  		};

		return (
		<div>
			<h2 style={{textAlign: "center"}}>Services</h2>
			<div className="services-top-section">
				<div>
					<ul>
					  <li onClick={()=>{careselctionSwitch(0)}}>24hr Home Care</li>
					  <li onClick={()=>{careselctionSwitch(1)}}>Personal Care Assistance</li>
					  <li onClick={()=>{careselctionSwitch(2)}}>Respite Care</li>
					  <li onClick={()=>{careselctionSwitch(3)}}>Mobility Assistance</li>
					  <li onClick={()=>{careselctionSwitch(4)}}>Social Care</li>
					  <li onClick={()=>{careselctionSwitch(5)}}>Palliative Care</li>
					  <li onClick={()=>{careselctionSwitch(6)}}>Laundry</li>
					  <li onClick={()=>{careselctionSwitch(7)}}>Meal Prep</li>
					  <li onClick={()=>{careselctionSwitch(8)}}>Errands</li>
					  <li onClick={()=>{careselctionSwitch(9)}}>Companionship</li>
					  <li onClick={()=>{careselctionSwitch(10)}}>Medicine Care</li>
					  <li onClick={()=>{careselctionSwitch(11)}}>Light HouseKeeping</li>
					</ul>
				</div>
				<div className="secondcolumn">
					<h4>{activeCareSelection.name}</h4>
					<img className="service-img" src={activeCareSelection.img}/>
					<p> 
						{activeCareSelection.desc}
					</p>	
				</div>
			</div>
			<div>
				<h2>Testimonial</h2>
				{expanded ? (
					<p>{largetext}</p>
					) 
				: (
					<p>
						{largetext.slice(0,100)}
						{largetext.length > 100 && "..."}
					</p>
					)}
				<div style={{cursor: "pointer"}} onClick={toggleExpand}>
		        	{expanded ? 'Less...' : 'More...'}
		      	</div>
				
			</div>
		</div>
		);
}

export default Services;