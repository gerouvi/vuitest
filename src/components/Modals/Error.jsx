import { WarningTwoIcon } from '@chakra-ui/icons';
import { Flex, Icon, Text } from '@chakra-ui/react';

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
	<Flex
		flexDirection='column'
		justifyContent='center'
		alignItems='center'
		gap={2}
		padding={4}
	>
		<Icon as={WarningTwoIcon} color='red.8' boxSize={6} />
		<Text color='red.8' mt={1}>
			Working in errors, maybe you left some input empty
		</Text>
	</Flex>
);

export default Error;
