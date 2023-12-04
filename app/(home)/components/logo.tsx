import React from 'react';
import Image from 'next/image';

export const Logo = () => {
	return (
		<div className='flex items-center gap-x-2'>
			<Image src={'/logo.svg'} alt='Logo' width={100} height={100} className='object-cover' />
		</div>
	);
};
