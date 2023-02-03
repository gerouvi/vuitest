import { Button, Flex } from '@chakra-ui/react';
import {
	addQuestion,
	loadingChanged
} from '../../lib/actions/createElectionActions';

const Buttons = ({
	election,
	dispatchElection,
	onOpenLoading,
	onCloseLoading,
	onOpenError,
	sendQuestion
}) => (
	<Flex direction='column' gap={3}>
		<Button
			variant='vocdoniSolid'
			onClick={() => dispatchElection(addQuestion())}
		>
			Add Question
		</Button>
		<Button
			variant='vocdoniSolid'
			onClick={() => {
				onOpenLoading();
				dispatchElection(loadingChanged());
				sendQuestion(election, dispatchElection, onCloseLoading, onOpenError);
			}}
		>
			Create Election
		</Button>
	</Flex>
);

export default Buttons;
