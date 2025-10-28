import React from 'react'
import {
	UilFacebook,
	UilGoogleDrive,
	UilLinkedin,
	// UilJavaScript,
	UilGithub,
} from '@iconscout/react-unicons';

const Footer = () => {
  return (
		<footer
			style={{}}
			className='grid grid-flow-col gap-4 justify-center items-center p-8  text-neutral-content bg-[#243a52] h-fit'>
			<a
				href='https://www.facebook.com/raeish.kada'
				className=''>
				<UilFacebook className='singleSocial' />
			</a>
			<a href='https://drive.google.com/file/d/1IcidbSYAi7caIgGmUtKuL-1iuX29nhdw/view?usp=drivesdk'>
				<UilGoogleDrive className='singleSocial' />
			</a>
			<a href='https://www.linkedin.com/in/joel-kada-191340143'>
				<UilLinkedin className='singleSocial' />
			</a>
			{/* <div><UilJavaScript/></div> */}
			<a href='https://github.com/Perekada'>
				<UilGithub className='singleSocial' />
			</a>
		</footer>
	);
}

export default Footer