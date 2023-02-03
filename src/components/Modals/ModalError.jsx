import {
	List,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react';

const ModalError = ({ isOpen, onClose, errors }) => {
	return (
		<>
			<Modal variant='error' isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Errors</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<List>
							{errors.map((err, index) => (
								<ListItem
									key={index}
									color='red.2'
									_dark={{
										color: 'red.1'
									}}
								>
									{/* <ListIcon as={SmallCloseIcon} color='red.3' /> */}
									{err}
								</ListItem>
							))}
						</List>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalError;
