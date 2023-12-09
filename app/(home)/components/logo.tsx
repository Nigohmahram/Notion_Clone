import React from 'react';
import Image from 'next/image';

export const Logo = () => {
	return (
		<div className='flex items-center gap-x-2'>
			<Image src={'/logo.svg'} alt='Logo0' width={35} height={35} className='object-cover' />
			<p className='font-semibold text-xl'>Notion</p>
		</div>
	);
};
