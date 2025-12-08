'use client';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import React from 'react';

const LoadingBars = () => {
	return (
		<div className='about-explain_skills flex flex-col w-full'>
			<h6>SKILLS</h6>
			<p>
				Here is a list of my tech stacks and my level of mastery on a scale of
				zero to one hundred. As yoy can see, I am almost expertly proficient in
				all.
			</p>
			<ul className='flex-grow-3 flex justify-center  w-[70%] align-middle list-none'>
				<div className='flex flex-col gap-8 w-full'>
					<li>HTML5</li>
					<div className='bg-gray-100 border border-gray-100 h-2'>
						<Progress value={100} />
					</div>
					<li>Css</li>
					<div className='bg-gray-100 border border-gray-100 h-2'>
						<Progress value={100} />
					</div>
					<li>Javascripts</li>
					<div className='bg-gray-100 border border-gray-100 h-2'>
						<Progress
							value={90}
							// className=' h-full bg-[#313131] animate-[javascripts.5s_linear_forwards]'
						/>
					</div>
					<li>React</li>
					<div className='bg-gray-100 border border-gray-100 h-2'>
						<Progress value={90} />
					</div>
					<li>Figma</li>
					<div className='bg-gray-100 border border-gray-100 h-2'>
						<Progress value={79} />
					</div>
					<li>PHP</li>
					<div className='bg-gray-100 border border-gray-100 h-2'>
						<Progress value={70} />
					</div>
					<li>MySQL</li>
					<div className='bg-gray-100 border border-gray-100 h-2'>
						<Progress value={85} />
					</div>
					<li>MySQL</li>
					<div className='bg-gray-100 border border-gray-100 h-2'>
						<Progress value={85} />
					</div>
				</div>
			</ul>
		</div>
	);
};

export default LoadingBars;
