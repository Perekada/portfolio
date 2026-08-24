'use client';
import React from 'react';
import Image from 'next/image';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';
import { projects } from '@/app/components/workData';

const page = () => {
	return (
		<div className='works'>
			<div className='projects'>
				{projects.map((project) => {
					const liveUrl = project.url || project.github;
					const languages = [
						project.language,
						...(project.frameworks || []),
					].filter(Boolean);
					const uniqueLanguages = [...new Set(languages)];

					return (
						<div
							key={project.id}
							className='project glass'>
							{project.img ? (
								<Image
									src={`/assets/${project.img}`}
									alt={project.text}
									className='project_img'
									width={240}
									height={160}
								/>
							) : null}
							<h3>{project.text}</h3>
							{project.description ? <p>{project.description}</p> : null}
							{liveUrl ? (
								<p>
									<a href={liveUrl}>{project.url ? 'Live site' : 'GitHub'}</a>
								</p>
							) : null}
							{project.github && project.url ? (
								<p>
									<a href={project.github}>GitHub</a>
								</p>
							) : null}
							<HoverCard>
								<HoverCardTrigger>Show Frameworks</HoverCardTrigger>
								<HoverCardContent>
									<p>Frameworks used:</p>
									<ul>
										{uniqueLanguages.length ? (
											uniqueLanguages.map((item) => (
												<li key={item}>{item}</li>
											))
										) : (
											<li>Not listed</li>
										)}
									</ul>
								</HoverCardContent>
							</HoverCard>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default page;
