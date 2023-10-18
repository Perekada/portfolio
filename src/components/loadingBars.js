import React from 'react'

const LoadingBars = () => {
  return (
		<div className='about-explain_skills'>
			<h6>SKILLS</h6>
			<p>
				Here is a list of my tech stacks and my level of mastery on a scale of zero to one hundred. As yoy can see, I am almost expertly proficient in all.
			</p>
			<ul className='about-explain_skills_bio'>
				<li>HTML5</li>
				<div className='about-skills'>
					<div className='about-skills-html'></div>
				</div>
				<li>Css</li>
				<div className='about-skills'>
					<div className='about-skills-css'></div>
				</div>
				<li>Javascripts</li>
				<div className='about-skills'>
					<div className='about-skills-javascripts'></div>
				</div>
				<li>React</li>
				<div className='about-skills'>
					<div className='about-skills-react'></div>
				</div>
				<li>Figma</li>
				<div className='about-skills'>
					<div className='about-skills-figma'></div>
				</div>
				<li>PHP</li>
				<div className='about-skills'>
					<div className='about-skills-php'></div>
				</div>
				<li>MySQL</li>
				<div className='about-skills'>
					<div className='about-skills-mysql'></div>
				</div>
			</ul>
		</div>
	);
}

export default LoadingBars