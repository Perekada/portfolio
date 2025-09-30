'use client'
import React, {useState} from 'react'
import { UilEnvelopes } from '@iconscout/react-unicons';
import { UilDraggabledots } from '@iconscout/react-unicons';
import { Link } from 'next/navigation';
import '../App.css'

const Navbar = () => {
	// const { isOpen, openModal, openResume, openPop } = useGlobal();
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler')
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
		<nav className='nav-conatiner'>
			<div className='logo'>
				<UilEnvelopes style={{ marginRight: '7px' }} />
				{/* <Link href='/'>  joelkada16@gmail.com</Link> */}
			</div>
			<ul className={active}>
				<li>
					{/* <Link
						href='/'
						onClick={() => setActive('nav__menu')}>
						Home
					</Link> */}
				</li>
				<li>
					{/* <Link
						href=''
						onClick={(e) => { e.preventDefault()
							openPop()}}>
						Resume
					</Link> */}
				</li>
				<li>
					{/* <Link
						href='/'
						onClick={() => setActive('nav__menu')}>
						Works
					</Link> */}
				</li>
				<li>
					{/* <Link href='' >Contact</Link> */}
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
	);
}

export default Navbar