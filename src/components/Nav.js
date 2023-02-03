import { Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Nav = () => {
	return (
		<Box as='header'>
			<nav>
				<h1>Vocdoni</h1>
				<NavLink to='/'>Create Election</NavLink>
				<NavLink to='about'>My election</NavLink>
				<ColorModeSwitcher justifySelf='flex-end' />
			</nav>
		</Box>
	);
};

export default Nav;
