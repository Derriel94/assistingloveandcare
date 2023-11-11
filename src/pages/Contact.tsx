import { useState, useRef, ChangeEvent } from "react";
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";
// import {Link} from "react-router-dom";

const Contact = () => {

  const [name, setName] = useState<string>('Patient Name');
	const [email, setEmail] = useState<string>('Patient Email');
	const [message, setMessage] = useState<string>(`Tell Us about your situation`);
	const form = useRef<HTMLFormElement>(null);

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setName(e.target.value);
  	}
  	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setEmail(e.target.value);
  	}
  	const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    	setMessage(e.target.value);
  	}
  		
  	const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
  		e.preventDefault();
 		try {
 			//have her create a emailjs file or create one for her and then tell her the specs
 			// const data = await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,form.current!,import.meta.env.VITE_PUB_ID);
 			// console.log('Success', data);
 			alert('Your message was sent and I will be in touch shortly')
 			location.reload();
 		} catch (error) {	
 			console.log('error', error);
 		}
 		
  	}
	return (
		<div className="contact">
			<div style={{textAlign: "center"}}>
				<h2>Contact Us</h2>
			</div>
			<img src='brit.png' alt="caregiver" />
			<form style={{display: "flex", flexDirection:"column"}}onSubmit={handleSubmit} ref={form}>

					<div  className="contactform">
						<img src='./healthy.png' alt="caregiver" />
						<div className="contactname"><div>★</div> Leave A Message <div>★</div></div>
						<input placeholder={name} name="from_name" type="text" id="name" required className="name"onChange={(e)=>handleNameChange(e)}/>
						<input placeholder={email} name="from_email" type="email" id="email" required className="email"onChange={(e)=>handleEmailChange(e)}/>
						<textarea placeholder={message} name="message" id="message" required className="message"onChange={(e)=>handleMessageChange(e)}/>					
						<input type="submit" value="submit" className="submit" />
							<img src='./errands.jpg' alt="caregiver" />
					</div>
				</form>
      </div>
		);
};

export default Contact;