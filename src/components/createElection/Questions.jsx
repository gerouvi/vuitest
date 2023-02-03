import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import {
	addOption,
	deleteQuestion,
	subtitleChanged,
	titleChanged
} from '../../lib/actions/createElectionActions';
import FormSection from '../forms/FormSection';
import InputText from '../forms/InputText';
import Question from './Question';

const Questions = ({ election, dispatchElection }) => {
	return (
		<>
			{election.questions.map((question, index) => (
				<FormSection key={index}>
					<Flex justifyContent='space-between' alignItems='center'>
						<Text>{`Question ${index + 1}`}</Text>
						<IconButton
							size='sm'
							aria-label='delete question'
							variant='iconButtonTransparent'
							_hover={{
								color: 'red.8'
							}}
							icon={<DeleteIcon />}
							onClick={() => dispatchElection(deleteQuestion(index))}
						/>
					</Flex>
					<InputText
						label='Title'
						value={question.questionTitle}
						onChange={e =>
							dispatchElection(titleChanged(index, e.target.value))
						}
					/>
					<InputText
						label='Description'
						value={question.questionDescription}
						onChange={e =>
							dispatchElection(subtitleChanged(index, e.target.value))
						}
					/>
					{question.options.map((option, i) => (
						<Question
							key={i}
							index={index}
							i={i}
							option={option}
							dispatchElection={dispatchElection}
						/>
					))}
					<IconButton
						size='sm'
						alignSelf='start'
						aria-label='add address'
						icon={<AddIcon />}
						variant='iconButtonVocdoni'
						onClick={() => dispatchElection(addOption(index))}
					/>
				</FormSection>
			))}
		</>
	);
};

export default Questions;
