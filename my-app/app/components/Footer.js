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
			className='socials'>
			<a href='https://www.facebook.com/raeish.kada'>
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