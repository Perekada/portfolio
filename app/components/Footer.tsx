import React from 'react';
import {
	FaFacebook,
	FaGoogleDrive,
	FaLinkedin,
	FaGithub,
} from 'react-icons/fa';

function Footer() {
	return (
		<>
			<footer
				style={{}}
				className='grid grid-flow-row grid-cols-2 grid-rows-2 gap-4  items-center p-5   bg-[#04052E] h-[260px] mt-4'>
				<div className='m-12'>
					<img
						src='/FullLogo.png'
						alt=''
						width={180}
						height={180}
						className='ml-12'
					/>
				</div>
				<div className='absolute justify-center  text-center ml-[220px] self-center'>
					<h4>I can do all things through Christ who strengthens me</h4>
				</div>
				<div className='grid grid-flow-col gap-10 mr-0 ml-12 justify-center'>
					<a href='https://www.facebook.com/raeish.kada'>
						<FaFacebook
							className='h-10 w-10 bg-transparent'
							color='#477071'
						/>
					</a>
					<a
						href='https://drive.google.com/file/d/1IcidbSYAi7caIgGmUtKuL-1iuX29nhdw/view?usp=drivesdk'
						className='h-10 w-10 border-2 rounded-full border-[#477071] flex items-center p-2 justify-center'>
						<FaGoogleDrive
							className='h-10 w-10 bg-transparent'
							color='#477071'
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/joel-kada-191340143'
						className='h-10 w-10 border-2 rounded-full border-[#477071] flex items-center p-2 justify-center'>
						<FaLinkedin
							className='h-10 w-10 bg-transparent'
							color='#477071'
						/>
					</a>
					{/* <div><UilJavaScript/></div> */}
					<a
						href='https://github.com/Perekada'
						className='h-10 w-10 border-2 rounded-full border-[#477071] flex items-center p-2 justify-center'>
						<FaGithub
							className='h-10 w-10 bg-transparent'
							color='#477071'
						/>
					</a>
				</div>

				<div>
					<h4 className=' ml-12'>@2024 Pere Kada. All rights reserved</h4>
				</div>
			</footer>
		</>
	);
}

export default Footer;
