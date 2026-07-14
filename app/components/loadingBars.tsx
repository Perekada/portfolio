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
					<motion.li
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.3, duration: 1.5 }}>
						<div>
							<h5>HTML5</h5>
							<div className='bg-gray-100 border border-gray-100 h-2'>
								<Progress value={100} />
							</div>
						</div>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.3, duration: 1.5 }}>
						<div>
							<h5>Css</h5>
							<div className='bg-gray-100 border border-gray-100 h-2'>
								<Progress value={100} />
							</div>
						</div>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.3, duration: 1.5 }}>
						<div>
							<h5>JavaScript</h5>
							<div className='bg-gray-100 border border-gray-100 h-2'>
								<Progress
									value={90}
									// className=' h-full bg-[#313131] animate-[javascripts.5s_linear_forwards]'
								/>
							</div>
						</div>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.3, duration: 1.5 }}>	
						<div>
							<h5>React</h5>
							<div className='bg-gray-100 border border-gray-100 h-2'>
								<Progress value={90} />
							</div>
						</div>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.3, duration: 1.5 }}>
						<div>
							<h5>Next JS</h5>
							<div className='bg-gray-100 border border-gray-100 h-2'>
								<Progress value={90} />
							</div>
						</div>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.3, duration: 1.5 }}>
						<div>
							<h5>Figma</h5>
							<div className='bg-gray-100 border border-gray-100 h-2'>
								<Progress value={79} />
							</div>
						</div>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.3, duration: 1.5 }}>
						<div>
							<h5>PHP</h5>
							<div className='bg-gray-100 border border-gray-100 h-2'>
								<Progress value={70} />
							</div>
						</div>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.3, duration: 1.5 }}>
						<div>
							<h5>Tailwind CSS</h5>
							<div className='bg-gray-100 border border-gray-100 h-2'>
								<Progress value={85} />
							</div>
						</div>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.3, duration: 1.5 }}>	
						<div>
							<h5>MySQL</h5>
							<div className='bg-gray-100 border border-gray-100 h-2'>
								<Progress value={85} />
							</div>
						</div>
					</motion.li>
				</div>
			</ul>
		</div>
	);
};

export default LoadingBars;
