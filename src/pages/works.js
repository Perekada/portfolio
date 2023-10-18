import React from 'react'
import { projects } from '../components/workData'

const works = () => {
  return (
		<div className='works'>
			<div className='projects'>
				{projects.map((project) => {
					const { id, img, text, url } = project;
					return (
						<div
							key={id}
							className='project glass'>
							<img
								src={require(`../assets/${img}`)}
								alt=''
								className='project_img'
							/>
							<h4>
								<a href={url}>{text}</a>
							</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default works