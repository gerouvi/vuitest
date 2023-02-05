import { WarningTwoIcon } from '@chakra-ui/icons';
import { Icon, ModalBody, Text } from '@chakra-ui/react';

// const Error = ({ errors }) => (
// 	<List>
// 		{errors.map((err, index) => (
// 			<ListItem
// 				key={index}
// 				color='red.2'
// 				_dark={{
// 					color: 'red.1'
// 				}}
// 			>
// 				{/* <ListIcon as={SmallCloseIcon} color='red.3' /> */}
// 				{err}
// 			</ListItem>
// 		))}
// 	</List>
// );

const Error = () => (
	<>
		<ModalBody>
			<Icon as={WarningTwoIcon} color='red.8' boxSize={6} />
			<Text color='red.8' mt={1}>
				Working in errors, maybe you left some input empty
			</Text>
		</ModalBody>
	</>
);

export default Error;
