import { Box } from '@chakra-ui/react';
import {
	electionDescriptionChanged,
	electionTitleChanged
} from '../../lib/actions/createElectionActions';
import FormSection from '../forms/FormSection';
import InputText from '../forms/InputText';

const Description = ({ election, dispatchElection }) => (
	<Box variant='form_section'>
		<FormSection>
			<InputText
				label='Election title'
				value={election.electionTitle}
				onChange={e => dispatchElection(electionTitleChanged(e.target.value))}
			/>
			<InputText
				label='Election description'
				value={election.electionDescription}
				onChange={e =>
					dispatchElection(electionDescriptionChanged(e.target.value))
				}
			/>
		</FormSection>
	</Box>
	// <FormSection>
	//   <InputText
	//     label="Election title"
	//     value={election.electionTitle}
	//     onChange={e => dispatchElection(electionTitleChanged(e.target.value))}
	//   />
	//   <InputText
	//     label="Election description"
	//     value={election.electionDescription}
	//     onChange={e =>
	//       dispatchElection(electionDescriptionChanged(e.target.value))
	//     }
	//   />
	// </FormSection>
);

export default Description;
