import {
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalOverlay
} from '@chakra-ui/react';

import Error from '../Modals/Error';
import Loading from '../Modals/Loading';
import Success from '../Modals/Success';
import Warning from '../Modals/Warning';

const CustomModal = ({ isOpen, onClose, modal }) => (
	<Modal
		variant={modal}
		isOpen={isOpen}
		closeOnOverlayClick={false}
		width='1000px'
		onClose={onClose}
	>
		<ModalOverlay />
		<ModalContent>
			<ModalCloseButton />
			{modal === 'warning' && <Warning />}
			{modal === 'success' && <Success />}
			{modal === 'loading' && <Loading />}
			{modal === 'error' && <Error />}
		</ModalContent>
	</Modal>
);

export default CustomModal;
