'use client';
import React, { useEffect, useState } from 'react';
import '../../App.css';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';
//use hover card to show frameworks used in each project

const page = () => {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const token =
				'GITHUB_TOKEN';
			const response = await fetch('https://api.github.com/user/repos', {
				headers: {
					Authorization: `token ${token}`,
				},
			});
			if (response.ok) {
				const data = await response.json();
				setRepos(data);
				console.log(data);
			} else {
				console.error('Failed to fetch repositories');
			}
		};
		fetchData();
	}, []);
	return (
		<div>
			<div className='projects'>
				{repos.map((repo: any) => (
					<div
						key={repo.id}
						className='project glass'>
						<h3>{repo.name}</h3>
						<HoverCard>
							<HoverCardTrigger>Show Frameworks</HoverCardTrigger>
							<HoverCardContent>
								<p>Frameworks used:</p>
								<ul>
									<li>{repo.language}</li>
								</ul>
							</HoverCardContent>
						</HoverCard>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
