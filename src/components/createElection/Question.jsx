import { DeleteIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import {
	deleteOption,
	optionChanged
} from '../../lib/actions/createElectionActions';
import InputText from '../forms/InputText';

const Question = ({ index, i, option, dispatchElection }) => (
	<Flex justifyContent='space-between' alignItems='center' gap={4}>
		<InputText
			label={`Option ${i + 1}`}
			variant='inputText'
			value={option}
			onChange={e => dispatchElection(optionChanged(index, i, e.target.value))}
		/>

		<IconButton
			size='sm'
			aria-label='delete question'
			variant='iconButtonTransparent'
			_hover={{
				color: 'red.8'
			}}
			icon={<DeleteIcon />}
			onClick={() => dispatchElection(deleteOption(index, i))}
		/>
	</Flex>
);

export default Question;
