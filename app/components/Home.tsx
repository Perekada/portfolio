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
	const projectList = projects.filter((project) => project.img).slice(0, 2);
	return (
		<motion.main
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}>
			<div className=' mt-16 flex flex-col items-center'>
				<div className='grid grid-cols-10 grid-rows-1 gap-4 w-full'>
					<section className='col-span-1 flex flex-col items-center gap-10 mt-14 lg:col-span-5'>
						<div className='flex flex-row items-center gap-4'>
							<section className='img-container'>
								<Image
									src={image}
									alt=''
									className='image'
									width={100}
									height={100}
								/>
							</section>
						</div>
						<div>
							<div className='mt-5 flex flex-col items-center text-center gap-4'>
								<Button
									variant={'outline'}
									className='bg-[#F5F5F5] text-[#140152] w-45 h-10 font-bold text-2xl font-playwrites border border-[#140152] hover:bg-[#140152] hover:text-white transition-all duration-300'
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
											My full name is Joel Oyinperebo Kada, I am from Bayelsa
											state.
										</p>
										<p>
											{' '}
											I studied computer science in the University of Benin. I
											have always had a passion for computers, technology and I
											have always been capitvated by the pursuit of knowledge.
										</p>
										<p>
											{' '}
											So as one does, I chose this path completely blind to the
											challanges of software engineering. I started with
											learning HTML on my phone, because I was told that I could
											do the amazing things I saw on the internet by myself.
										</p>
										<p>
											{' '}
											But I wasn't truly hooked until I picked up Javascript and
											Django with Python. By my first <b>
												{' '}
												"Hello World "{' '}
											</b>{' '}
											console log, I knew I had found my passion in life and I
											was sure I would do whatever i needed to to follow this
											passion. I am a self taught programmer (Yes, that means
											youtube videos😉) with 7 years of experience in frontend
											web development.
										</p>
										<p>
											{' '}
											<b> My goal ?</b> <br /> To keep refining my skills,
											staying updated with the latest tech, and collaborating
											with companies and individuals to bring their ideas to
											life on the web.
										</p>
									</section>
								) : (
									<></>
								)}
							</div>
						</div>
					</section>

					<section className='col-span-4 flex justify-center gap-1 lg:col-span-4 lg:justify-start h-fit'>
						<article className='w-full max-w-[400px] overflow-hidden rounded-[14px] border border-[#d8d8d8] bg-white hover:bg-[#e5e5e5] font-sans text-[#191919] shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-colors duration-300'>
	<div className="flex items-center gap-2 bg-[#0077b5] text-white font-sans font-bold text-base px-6 py-2 transition-colors duration-300 select-none">
        <svg 
        //   xmlns="http://w3.org" 
          viewBox="0 0 24 24" 
          className="w-5 h-5 fill-current"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        <span>LinkedIn</span>
      </div>
							<div className='flex flex-col items-center px-3 py-1 text-center'>
								<Image
									src='/linkedin_profile.png'
									alt='Joel Oyinperebo Kada'
									width={55}
									height={55}
									className='mb-1 rounded-full object-cover flex self-center'
								/>
								<h2 className='m-0 text-[14px] font-semibold leading-tight text-black'>Joel Oyinperebo Kada</h2>
								<p className='mb-0.5 mt-0.5 text-[13px] leading-tight text-black'>Software Engineer, Full stack Developer</p>
								<p className='m-0 text-[13px] leading-tight text-[#0a66c2]'>University of Benin</p>
								<a
									href='https://www.linkedin.com/in/joel-oyinperebo-kada/'
									target='_blank'
									rel='noreferrer'
									className='mt-1 inline-flex min-h-[27px] items-center justify-center rounded-full border-2 border-[#0a66c2] px-[16px] text-[16px] font-semibold leading-none text-[#0a66c2] transition-colors hover:bg-[#e8f3ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a66c2]'>
									View profile
								</a>
							</div>
						</article>
					</section>
				</div>

				<Separator
					className='my-8 h-0.5 bg-[#9395D3]'
					color='#9395D3'
				/>

				<section
					className='section'
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: '2rem',
					}}>
					{/* <Separator
						orientation='vertical'
						className='h-220 w-1 bg-[#9395D3]'
					/> */}
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
						className='h-220 w-1 bg-[#9395D3]'
					/>
					<div className='w-[50%]'>
						<LoadingBars />
					</div>
				</section>
				<section>
					<Button
						className=' w-200 h-15 text-white rounded-3xl bg-[#140152] border border-[#140152] hover:bg-[#F5F5F5] hover:text-[#140152] transition-all duration-300 mb-0 text-lg '
						variant={'default'}
						// onClick={openModal}
						style={{ marginTop: '50px' }}>
						Do You Need a Developer? Connect with Me
					</Button>
				</section>
			</div>
		</motion.main>
	);
}
