import React from 'react'
import image from '../assets/image.jpg'
import LoadingBars from '../components/loadingBars';
import { useGlobal } from '../Context';
import { projects } from '../components/workData';
import { NavLink } from 'react-router-dom';


const Home = () => {
	const { openModal} = useGlobal();
	const projectList = projects.slice(0, 2)
  return (
		<div className='home overlay'>
			<section className='img-container'>
				<img
					src={image}
					alt=''
					className='image'
				/>
			</section>
			<section className='description'>
				<h3>Hi, I'm Pere 👋</h3>
				<h2>
					Software Engineer React and Web developer. <br />
					Bringing Your Ideas to Reality
				</h2>
				<p>
					{' '}
					My full name is Joel Oyinperebo Kada, I am from Bayelsa state, but I
					was born and brought up in the city of Lagos.
				</p>
				<p>
					{' '}
					I studied computer science in the University of Benin. I have always
					had a passion for computers, technology and I have always been
					capitvated by the puruit of knowledge.
				</p>
				<p>
					{' '}
					So as one does, I chose this path completely blind to the challanges
					of software engineering. I started with learning HTML on my phone,
					because I was told that I could do the amazing things I saw on the
					internet by myself.
				</p>
				<p>
					{' '}
					But I wasn't truly hooked until I picked up Javascript and Django with
					Python. By my first <b> "Hello World " </b>console log, I knew I had
					found my passion in life and I was sure I would do whatever i needed
					to to follow this passion. I am a self taught programmer (Yes, that
					means youtube videos😉) with 4 years of experience in frontend web
					development.
				</p>
				<p>
					{' '}
					<b> My goal ?</b> <br /> To keep refining my skills, staying updated
					with the latest tech, and collaborating with companies and individuals
					to brng their ideas to life on the web.
				</p>
			</section>
			<section
				className='section'
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: '2rem',
				}}>
				<span>
					{projectList.map((project) => {
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
					<button className='more-btn'>
						<NavLink to='works'>More Projects..</NavLink>
					</button>
				</span>
				<span>
					<LoadingBars />
				</span>
			</section>
			<section>
				<button
					className='connect-btn'
					onClick={openModal}
					style={{ marginTop: '50px' }}>
					Connect with Me
				</button>
			</section>
		</div>
	);
}

export default Home