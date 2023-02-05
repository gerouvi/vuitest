import { Button, Flex } from '@chakra-ui/react';
import { addQuestion } from '../../lib/actions/createElectionActions';

const Buttons = ({ handleSendQuestion, dispatchCreateElection }) => (
	<Flex direction='column' gap={3}>
		<Button
			variant='vocdoniSolid'
			onClick={() => dispatchCreateElection(addQuestion())}
		>
			Add Question
		</Button>
		<Button variant='vocdoniSolid' onClick={handleSendQuestion}>
			Create Election
		</Button>
	</Flex>
);

export default Buttons;
