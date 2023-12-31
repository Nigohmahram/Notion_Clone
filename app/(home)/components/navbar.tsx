import React from 'react';
import { Logo } from '.';
import { ModeToggle } from '@/components/shared/mode-toggle';

export const Navbar = () => {
	return (
		<div className='z-50 bg-background fixed top-0 flex items-center w-full p-6 justify-between'>
			<Logo />
			<div className='flex items-center gap-x-2'>
				<ModeToggle />
			</div>
		</div>
	);
};
