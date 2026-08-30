'use client';
import React, { useState, FC } from 'react';
import { Mail, Menu } from 'lucide-react';
import { useGlobal } from '../Context';
import Resume from './Resume';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Navbar: FC = () => {
	const { isOpen, openModal, openResume, setOpenResume, openPop } = useGlobal();
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

	return (
		<div>
			<nav className='fixed top-0 w-[100%] z-[1000] flex h-[8vh] items-center justify-between p-10 bg-[#140152]'>
				<div className='logo'>
					<a
						href='mailto:joelkada16@gmail.com'
						className='flex items-center family--font-nunito'>
						<Mail className='mr-[12px]' />
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
						<Button
							className='cursor-pointer text-[#3b595d] no-underline hover:no-underline'
                            variant='link'
							onClick={() => {
								setActive('nav__menu');
								setOpenResume(true);
							}}>
							Resume
						</Button>
					</li>
					<li style={{ display: 'none' }}>
						<Resume />
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
				<div
					onClick={navToggle}
					className={toggleIcon}>
					<Menu className='icon' />
				</div>
			</nav>
			<Resume />
		</div>
	);
};
