'use client';

import axios from 'axios';
import {	FcGoogle	} from 'react-icons/fc';
import { AiFillGithub  } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

import {	useCallback, useState	} from 'react';
import {
	FieldValues,
	SubmitHandler,
	useForm
} from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/input';
import toast from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';
import useLoginModal from '@/app/hooks/useLoginModal';


const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: {
			errors,
		}
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			passwords: '',
		}
	});


	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		axios.post('/api/register', data)
			.then(() => {
				registerModal.onClose();
				loginModal.onOpen();

			})
			.catch((error) => {
				toast.error('Something went wrong');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const toggle = useCallback(() =>{
		registerModal.onClose();
		loginModal.onOpen();
	}, [loginModal, registerModal]);

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading
				title='Bem vindo ao Flash'
				subtitle='Criar uma conta'
			/>

			<Input
				id='email'
				label='Email'
				disabled={isLoading}
				register={register}
				errors={errors}
				required

			/>
			<Input
				id='name'
				label='Name'
				disabled={isLoading}
				register={register}
				errors={errors}
				required

			/>
			<Input
				id='password'
				type='password'
				label='Password'
				disabled={isLoading}
				register={register}
				errors={errors}
				required

			/>
		</div>
	);


	const footerContent = (
		<div className='flex flex-col gap-4 mt-3'>
			<hr />
			<Button
				outline
				label='Continue com Google'
				icon={FcGoogle}
				onClick={() => signIn('google')}
			/>
			<Button
				outline
				label='Continue com Facebook'
				icon={FaFacebook}
				onClick={() => signIn('facebook')}
			/>
			<Button
				outline
				label='Continue com Github'
				icon={AiFillGithub}
				onClick={() => signIn('github')}
			/>
			<div className=' text-neutral-500 text-center mt-4 font-light '>
				<div className='justify-center flex flex-row items-center gap-2'>
					<div>
						Ja possui uma conta?
					</div>
					<div onClick={toggle} className='text-neutral-800 cursor-pointer hover:underline'>
						Entre
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title='Registrar'
			actionLabel='Continue'
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
