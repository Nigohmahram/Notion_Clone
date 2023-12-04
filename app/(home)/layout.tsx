import { ChildProps } from '@/types';
import React from 'react';
import { Navbar } from './components';

const Layout = ({ children }: ChildProps) => {
	return (
		<div>
			<Navbar />
			<main className='h-full pt-40'>{children}</main>
		</div>
	);
};

export default Layout;
