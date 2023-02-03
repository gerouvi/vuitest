import {
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	Spinner,
	Text
} from '@chakra-ui/react';

const ModalLoading = ({ isOpen }) => (
	<Modal variant='loading' isOpen={isOpen} closeOnOverlayClick={false}>
		<ModalOverlay />
		<ModalContent>
			<ModalBody>
				<Spinner width='70px' height='70px' color='green.vocdoni' />
				<Text color='green.vocdoni'>Creating...</Text>
				<Text fontSize='.7em' textAlign='center'>
					Please dont refresh the page
				</Text>
			</ModalBody>
		</ModalContent>
	</Modal>
);

export default ModalLoading;
