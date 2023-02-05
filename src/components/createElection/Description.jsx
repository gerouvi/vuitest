import { Box } from '@chakra-ui/react';
import {
	descriptionChanged,
	titleChanged
} from '../../lib/actions/createElectionActions';
import FormSection from '../forms/FormSection';
import InputText from '../forms/InputText';

const Description = ({ createElection, dispatchCreateElection }) => (
	<Box variant='form_section'>
		<FormSection>
			<InputText
				label='Election title'
				value={createElection.title}
				onChange={e => dispatchCreateElection(titleChanged(e.target.value))}
			/>
			<InputText
				label='Election description'
				value={createElection.description}
				onChange={e =>
					dispatchCreateElection(descriptionChanged(e.target.value))
				}
			/>
		</FormSection>
	</Box>
);

export default Description;
