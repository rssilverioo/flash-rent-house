import type { Metadata } from 'next';
import { Nunito, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';

const font = Poppins({
	subsets: ['latin'],
	weight: ['100','200','300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
	title: 'Igrib',
	description: 'Igrib',
};

export default async function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	const currentUser = await getCurrentUser();


	return (
		<html lang="en">
			<body className={font.className}>
				<ClientOnly>
					<ToasterProvider />
					<SearchModal />
					<RegisterModal />
					<RentModal />
					<LoginModal />
					<Navbar currentUser={currentUser} />

				</ClientOnly>
				<div className='pb-20 pt-28 '>
					{children}

				</div>
			</body>
		</html>
	);
}
