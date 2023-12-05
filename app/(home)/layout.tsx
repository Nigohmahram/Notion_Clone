import { ChildProps } from '@/types';
import React from 'react';
import { Navbar } from './components';
import { ThemeProvider } from '../../components/providers/theme-provider';

const Layout = ({ children }: ChildProps) => {
	return (
		<div>
			<Navbar />
			<main className='h-full pt-40'>{children}</main>
		</div>
	);
};

export default Layout;
