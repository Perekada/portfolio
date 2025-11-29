import React from 'react';
import {
	UilFacebook,
	UilGoogleDrive,
	UilLinkedin,
	// UilJavaScript,
	UilGithub,
} from '@iconscout/react-unicons';

const Footer = () => {
	return (
		<>
			<footer
				style={{}}
				className='grid grid-flow-row grid-cols-2 grid-rows-2 gap-4  items-center p-5   bg-[#04052E] h-[260px] mt-24'>
				<div className='m-12'>
					<img
						src='/FullLogo.png'
						alt=''
						width={180}
						height={180}
						className='ml-12'
					/>
				</div>
				<div className='grid grid-flow-col gap-10 mr-0 ml-12 justify-center'>
					<a
						href='https://www.facebook.com/raeish.kada'
						className='h-10 w-10 border-2 rounded-full border-[#477071] flex items-center p-2 justify-center'>
						<UilFacebook
							className='h-10 w-10 bg-transparent'
							color='#477071'
						/>
					</a>
					<a
						href='https://drive.google.com/file/d/1IcidbSYAi7caIgGmUtKuL-1iuX29nhdw/view?usp=drivesdk'
						className='h-10 w-10 border-2 rounded-full border-[#477071] flex items-center p-2 justify-center'>
						<UilGoogleDrive
							className='h-10 w-10 bg-transparent'
							color='#477071'
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/joel-kada-191340143'
						className='h-10 w-10 border-2 rounded-full border-[#477071] flex items-center p-2 justify-center'>
						<UilLinkedin
							className='h-10 w-10 bg-transparent'
							color='#477071'
						/>
					</a>
					{/* <div><UilJavaScript/></div> */}
					<a
						href='https://github.com/Perekada'
						className='h-10 w-10 border-2 rounded-full border-[#477071] flex items-center p-2 justify-center'>
						<UilGithub
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
};

export default Footer;
