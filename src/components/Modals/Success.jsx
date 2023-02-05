import { CheckCircleIcon } from '@chakra-ui/icons';
import { Icon, ModalBody, Text } from '@chakra-ui/react';

const Success = () => (
	<ModalBody>
		<Icon as={CheckCircleIcon} color='green.vocdoni' boxSize={6} />
		<Text mt={1} color='green.vocdoni'>
			Election created successfully
		</Text>
	</ModalBody>
);

export default Success;
