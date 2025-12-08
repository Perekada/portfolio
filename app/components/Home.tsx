'use client';
import React from 'react';
import image from '@/public/assets/image.jpg';
import Image from 'next/image';
import '../App.css';
import LoadingBars from '@/app/components/loadingBars'; // Adjust path as needed
import { useGlobal } from '../Context';
import { projects } from './workData';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

export default function Home() {
	// const { openModal } = useGlobal();
	const { active, setActive } = useGlobal();
	const projectList = projects.slice(0, 2);
	return (
		<motion.main
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      
    >

		<div className=' mt-16 flex flex-col items-center'>
			<section className='img-container'>
				<Image
					src={image}
					alt=''
					className='image'
					width={100}
					height={100}
				/>
			</section>
			<div className='mt-5 flex flex-col items-center text-center gap-4'>
				<Button
					variant={'outline'}
					className='bg-[#F5F5F5] text-[#140152] w-[180px] h-[40px] font-bold text-2xl font-playwrites border border-[#140152] hover:bg-[#140152] hover:text-white transition-all duration-300'
					onClick={() => setActive(!active)}>
					About Me
				</Button>
				{active ? (
					<section className='flex flex-col justify-center items-center gap-4 mt-4 px-4 w-[60%] text-center'>
						<h3 className='font-playwrites'>Hi, I'm Pere 👋</h3>
						<h2>
							Software Engineer React and Web developer. <br />
							Bringing Your Ideas to Reality
						</h2>
						<p>
							{' '}
							My full name is Joel Oyinperebo Kada, I am from Bayelsa state.
						</p>
						<p>
							{' '}
							I studied computer science in the University of Benin. I have
							always had a passion for computers, technology and I have always
							been capitvated by the pursuit of knowledge.
						</p>
						<p>
							{' '}
							So as one does, I chose this path completely blind to the
							challanges of software engineering. I started with learning HTML
							on my phone, because I was told that I could do the amazing things
							I saw on the internet by myself.
						</p>
						<p>
							{' '}
							But I wasn't truly hooked until I picked up Javascript and Django
							with Python. By my first <b> "Hello World " </b> console log, I
							knew I had found my passion in life and I was sure I would do
							whatever i needed to to follow this passion. I am a self taught
							programmer (Yes, that means youtube videos😉) with 7 years of
							experience in frontend web development.
						</p>
						<p>
							{' '}
							<b> My goal ?</b> <br /> To keep refining my skills, staying
							updated with the latest tech, and collaborating with companies and
							individuals to bring their ideas to life on the web.
						</p>
					</section>
				) : (
					<></>
				)}
			</div>
			<Separator
				className='my-8 h-2 bg-[#9395D3]'
				color='#9395D3'
			/>
			<section
				className='section'
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: '2rem',
				}}>
				<div>
					{projectList.map((project: any) => {
						const { id, img, text, url } = project;
						return (
							<div
								key={id}
								className='project glass'>
								<Image
									src={`/assets/${img}`}
									alt=''
									className='project_img'
									width={100}
									height={100}
								/>
								<h4>
									<a href={url}>{text}</a>
								</h4>
							</div>
						);
					})}
					<button className='more-btn'>
						<Link href='works'>More Projects..</Link>
					</button>
				</div>
				<Separator
					orientation='vertical'
					className='h-[880px] w-1 bg-[#9395D3]'
				/>
				<div className='w-[50%]'>
					<LoadingBars />
				</div>
			</section>
			<section>
				<Button
					className=' w-[800px] h-[60px] text-white rounded-3xl bg-[#140152] border border-[#140152] hover:bg-[#F5F5F5] hover:text-[#140152] transition-all duration-300 mb-0 text-lg '
					variant={'default'}
                    // onClick={openModal}
					style={{ marginTop: '50px' }}>
                    Do You Need a Developer?
					Connect with Me
				</Button>
			</section>
		</div>
					</motion.main>
	);
}
