import { WarningTwoIcon } from '@chakra-ui/icons';
import { Icon, ModalBody, Text } from '@chakra-ui/react';

const Warning = () => (
	<ModalBody>
		<Icon as={WarningTwoIcon} color='orange' boxSize={6} />
		<Text color='orange' mt={1}>
			Weighted vote is not currently available
		</Text>
	</ModalBody>
);

export default Warning;
