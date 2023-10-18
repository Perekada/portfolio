import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Contact from './Contact';
import Resume from './Resume';
import { useGlobal } from '../Context';
import { UilEnvelopes } from '@iconscout/react-unicons';
import { UilDraggabledots } from '@iconscout/react-unicons';
import '../App.css'

const Navbar = () => {
	const { isOpen, openModal, openResume, openPop } = useGlobal();
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

	const handleConact = (e) =>{
		e.preventDefault()

		openModal()
		return 
	}

  return (
		<nav className='nav-conatiner'>
			<div className='logo'>
				<UilEnvelopes style={{ marginTop: '5px' }} />
				<NavLink onClick={handleConact}>joelkada16@gmail.com</NavLink>
			</div>
			<ul className={active}>
				<li>
					<NavLink
						to='/'
						onClick={() => setActive('nav__menu')}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to=''
						onClick={(e) => { e.preventDefault()
							openPop()}}>
						Resume
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/works'
						onClick={() => setActive('nav__menu')}>
						Works
					</NavLink>
				</li>
				<li>
					<NavLink to='' onClick={handleConact} >Contact</NavLink>
				</li>
			</ul>
			{isOpen && (<Contact/>)}
			{openResume && (<Resume/>)}
			<div
				onClick={navToggle}
				className={toggleIcon}>
				<UilDraggabledots className='icon' />
			</div>
		</nav>
	);
}

export default Navbar