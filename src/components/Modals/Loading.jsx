import { ModalBody, Spinner, Text } from '@chakra-ui/react';

const Loading = () => (
	<ModalBody>
		<Spinner width='70px' height='70px' color='green.vocdoni' />
		<Text color='green.vocdoni'>Creating...</Text>
		<Text fontSize='.7em' textAlign='center'>
			Please dont refresh the page
		</Text>
	</ModalBody>
);

export default Loading;
