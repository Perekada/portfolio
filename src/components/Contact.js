import React, {useRef, useState} from 'react'
import { useGlobal } from '../Context';
import { UilWhatsapp } from '@iconscout/react-unicons';
import emailjs from '@emailjs/browser'

const Contact = () => {


	const form = useRef()
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();

	var templateParams = {
		name: name,
		email: email,
		message: message,
	};
	const send = () => {
		emailjs
			.send(
				'service_ldu69s5',
				'template_mf9163o',
				templateParams,
				'CIUw0NAi1htBswg9y'
			)
			.then(
				function (response) {
					console.log('SUCCESS!', response.status, response.text);
				},
				function (error) {
					console.log('FAILED...', error);
				}
			);
	};


  const { isOpen, handleOutsideClick} = useGlobal();
	  const handleAccept = (e) => {
			e.preventDefault();
			send();
			setTimeout(()=>{window.location.reload()}, 4000)
		};
 
  return (
		<div className='form'>
			{/* <button onClick={openModal}>Open Form</button> */}
			{isOpen && (
				<div
					className='popup-overlay'
					onClick={handleOutsideClick}>
					<div className='popup'>
						<form
							ref={form}
							action=''
							onSubmit={handleAccept}>
							<section className='form-group'>
								<label htmlFor='Name'>Name</label>
								<input
									type='text'
									name='Name'
									placeholder='Name'
									id='Name'
									required
									onChange={(e) => setName(e.target.value)}
								/>
							</section>
							<section className='form-group'>
								<label htmlFor='Email'>Email</label>
								<input
									type='email'
									name='Email'
									placeholder='Email'
									id='Email'
									onChange={(e) => setEmail(e.target.value)}
								/>
							</section>
							<section className='form-group'>
								<label htmlFor='Message'>Message</label>
								<textarea
									name='Message'
									id='Message'
									placeholder='Message'
									cols='30'
									rows='10'
									onChange={(e) => setMessage(e.target.value)}></textarea>
							</section>
							<button
								type='submit'
								className='submit-btn'
								onClick={handleOutsideClick}>
								Send
							</button>
						</form>
						<a href='https://wa.me/2347011715375'>
							<button className='whatsapp-btn'>
								<UilWhatsapp />
							</button>
						</a>
					</div>
				</div>
			)}
		</div>
	);
}

export default Contact