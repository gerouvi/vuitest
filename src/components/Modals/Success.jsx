import { CheckCircleIcon } from '@chakra-ui/icons';
import { Icon, ModalBody, Text } from '@chakra-ui/react';

const Success = ({ id }) => (
	<ModalBody>
		<Icon as={CheckCircleIcon} boxSize={6} />
		<Text mt={1}>Election created successfully</Text>
		<Text color='white'>Election Id:</Text>
		<Text color='white'>
			c5d2460186f72e5b02237f4489d53a7fe4ae2134fabef8323507020000000011
		</Text>
	</ModalBody>
);

export default Success;
