import { CheckCircleIcon } from '@chakra-ui/icons';
import { Flex, Icon, Text } from '@chakra-ui/react';

const Success = () => (
	<Flex
		flexDirection='column'
		justifyContent='center'
		alignItems='center'
		gap={2}
		padding={4}
		overflow='hidden'
	>
		<Icon as={CheckCircleIcon} color='green.vocdoni' boxSize={6} />
		<Text mt={1} color='green.vocdoni'>
			Election created successfully
		</Text>
	</Flex>
);

export default Success;
