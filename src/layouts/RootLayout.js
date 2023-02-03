import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const RootLayout = () => {
	return (
		<Flex
			flexDirection='column'
			minHeight='100vh'
			maxWidth='1200px'
			margin='0 auto'
		>
			<Nav />
			<main>
				<Outlet />
			</main>
			<Footer />
		</Flex>
	);
};

export default RootLayout;
