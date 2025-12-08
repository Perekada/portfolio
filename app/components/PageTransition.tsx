'use client';
import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
	hidden: { opacity: 0, x: -20, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 20, y: 0 },
};

const PageTransition = ({ children }: { children: ReactNode }) => {
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				variants={variants}
				initial='hidden'
				animate='enter'
				exit='exit'
				transition={{ type: 'tween', duration: 1 }}
                className='min-h-screen'>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;
