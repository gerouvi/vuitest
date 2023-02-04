import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<Flex
			direction='column'
			alignItems='center'
			justifyContent='center'
			gap={4}
		>
			<Text as='h2' fontSize='2em'>
				Page not found
			</Text>

			<Text>
				Go to
				<Text as='span' textDecoration='underline' marginLeft={1}>
					<Link to='/'>Home</Link>
				</Text>
				.
			</Text>
		</Flex>
	);
};

export default NotFound;
