'use client';
import React, { useState } from 'react';
import { UilEnvelopes } from '@iconscout/react-unicons';
import { UilDraggabledots } from '@iconscout/react-unicons';
import { useGlobal } from '../Context';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
	const { isOpen, openModal, openResume, openPop } = useGlobal();
	const [active, setActive] = useState('nav__menu');
	const [toggleIcon, setToggleIcon] = useState('nav__toggler');
	const navToggle = () => {
		active === 'nav__menu'
			? setActive('nav__menu nav__active')
			: setActive('nav__menu');

		toggleIcon === 'nav__toggler'
			? setToggleIcon('nav__toggler toggle')
			: setToggleIcon('nav__toggler');
	};

	// const handleConact = (e) =>{
	// 	e.preventDefault()

	// 	openModal()
	// 	return
	// }

	return (
		<div>
			<nav className='fixed top-0 w-[100%] z-[1000] flex h-[8vh] items-center justify-between p-10 bg-[#140152]'>
				<div className='logo'>
					<a
						href='mailto:joelkada16@gmail.com'
						className='flex items-center family--font-nunito'>
						<UilEnvelopes className='mr-[12px]' />
						joelkada16@gmail.com
					</a>
				</div>
				<div>
					<Link
						href='/'
						className='nav__brand'>
						<Image
							src={'/FullLogo.png'}
							width={150}
							alt='logo'
							height={150}
						/>
					</Link>
				</div>
				<ul className={active}>
					<li>
						<Link
							href='/'
							onClick={() => setActive('nav__menu')}>
							Home
						</Link>
					</li>
					<li>
						<Link
							href=''
							onClick={(e) => {
								e.preventDefault();
								openPop();
							}}>
							Resume
						</Link>
					</li>
					<li>
						<Link
							href='/works'
							onClick={() => setActive('nav__menu')}>
							Works
						</Link>
					</li>
					<li>
						<Link href=''>Contact</Link>
					</li>
				</ul>
				{/* {isOpen && (<Contact/>)}
			{openResume && (<Resume/>)} */}
				<div
					onClick={navToggle}
					className={toggleIcon}>
					<UilDraggabledots className='icon' />
				</div>
			</nav>
		</div>
	);
};
