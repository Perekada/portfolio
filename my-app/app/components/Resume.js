import React from 'react'
import { useGlobal } from '../Context';
import resume from '../assets/Pere-Kada.pdf'
import {UilGoogleDrive, UilDownloadAlt} from '@iconscout/react-unicons'


const Resume = () => {

  const{
    openResume, setOpenResume
  } = useGlobal()
  return (
		<div
			onClick={() => {
				setOpenResume(!openResume);
			}}>
			{openResume && (
				<div className='popup-overlay'>
					<div className='popup'>
						<a href='https://drive.google.com/file/d/1IcidbSYAi7caIgGmUtKuL-1iuX29nhdw/view?usp=drivesdk'>
							<button className='resume-btn'>
								Open in Drive
								<UilGoogleDrive />
							</button>
						</a>
						<a
							href={resume}
							download>
							<button className='resume-btn'>
								Download CV <UilDownloadAlt />
							</button>
						</a>
					</div>
				</div>
			)}
		</div>
	);
}

export default Resume