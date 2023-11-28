'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';

const Logo = () => {
	const router = useRouter();


	const onBack = () => {
		router.push('/');
		console.log('entrando');
	};

	return (
		<Image
			onClick={onBack}
			alt="logo"
			className='hidden md:block cursor-pointer'
			height='100'
			width='100'
			src='/images/logo.png'

		/>
	);
};


export default Logo;
