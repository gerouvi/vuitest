import { Box, Flex } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';
import { ColorModeSwitcher } from '../components/buttons/ColorModeSwitcher';
import PoweredIcon from '../components/icons/PoweredIcon';
import VocdoniIcon from '../components/icons/VocdoniIcon';

const RootLayout = () => {
	return (
		<Flex
			paddingX={4}
			flexDirection='column'
			minHeight='100vh'
			maxWidth='1200px'
			margin='0 auto'
		>
			<Box as='header'>
				<Flex
					as='nav'
					justifyContent='end'
					alignItems='center'
					gap={4}
					paddingTop={4}
					sx={{
						'& .active': {
							color: 'green.vocdoni'
						}
					}}
				>
					<Box marginRight='auto'>
						<NavLink to='/'>
							<VocdoniIcon />
						</NavLink>
					</Box>
					<NavLink to='createelection'>Create Election</NavLink>
					<NavLink to='myelections'>My elections</NavLink>
					<ColorModeSwitcher mb={1} size='sm' justifySelf='flex-end' />
				</Flex>
			</Box>
			<Box as='main' marginTop='3em'>
				<Outlet />
			</Box>
			<Flex as='footer' justifyContent='center' marginTop='auto' pb={4}>
				<PoweredIcon />
			</Flex>
		</Flex>
	);
};

export default RootLayout;
