import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import {
	addOption,
	deleteQuestion,
	questionSubtitleChanged,
	questionTitleChanged
} from '../../lib/actions/createElectionActions';
import FormSection from '../forms/FormSection';
import InputText from '../forms/InputText';
import Question from './Question';

const Questions = ({ createElection, dispatchCreateElection }) => {
	return (
		<>
			{createElection.questions.map((question, index) => (
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
							onClick={() => dispatchCreateElection(deleteQuestion(index))}
						/>
					</Flex>
					<InputText
						label='Title'
						value={question.questionTitle}
						onChange={e =>
							dispatchCreateElection(
								questionTitleChanged(index, e.target.value)
							)
						}
					/>
					<InputText
						label='Description'
						value={question.questionDescription}
						onChange={e =>
							dispatchCreateElection(
								questionSubtitleChanged(index, e.target.value)
							)
						}
					/>
					{question.options.map((option, i) => (
						<Question
							key={i}
							index={index}
							i={i}
							option={option}
							dispatchCreateElection={dispatchCreateElection}
						/>
					))}
					<IconButton
						size='sm'
						alignSelf='start'
						aria-label='add address'
						icon={<AddIcon />}
						variant='iconButtonVocdoni'
						onClick={() => dispatchCreateElection(addOption(index))}
					/>
				</FormSection>
			))}
		</>
	);
};

export default Questions;
