import { WarningTwoIcon } from '@chakra-ui/icons';
import { Flex, Icon, Text } from '@chakra-ui/react';

const Warning = () => (
	<Flex
		flexDirection='column'
		justifyContent='center'
		alignItems='center'
		gap={2}
		padding={4}
	>
		<Icon as={WarningTwoIcon} color='orange' boxSize={6} />
		<Text color='orange' mt={1}>
			Weighted vote is not currently available
		</Text>
	</Flex>
);

export default Warning;
