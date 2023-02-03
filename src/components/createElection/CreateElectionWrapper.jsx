import { Center, useDisclosure } from '@chakra-ui/react';
import { useReducer } from 'react';
import createElectionReducer, {
	getCreateElectionInitialValues
} from '../../lib/reducers/createElectionReducer';
import FormWrapper from '../forms/FormWrapper';
import ModalError from '../Modals/ModalError';
import ModalLoading from '../Modals/ModalLoading';
import Addresses from './Addresses';
import Buttons from './Buttons';
import Description from './Description';
import Questions from './Questions';
import WeightingVote from './WeightingVote';

const CreateElectionWrapper = () => {
	const [election, dispatchElection] = useReducer(
		createElectionReducer,
		'0x85338566e3bCd36c28f47e92423E9672770674cD',
		getCreateElectionInitialValues
	);
	const {
		isOpen: isOpenLoading,
		onOpen: onOpenLoading,
		onClose: onCloaseLoading
	} = useDisclosure();

	const {
		isOpen: isOpenError,
		onOpen: onOpenError,
		onClose: onCloseError
	} = useDisclosure();

	return (
		<Center flexDirection='column'>
			<ModalLoading isOpen={isOpenLoading} />
			<ModalError
				isOpen={isOpenError}
				onClose={onCloseError}
				errors={election.errors}
			/>

			<FormWrapper width='90vw' maxWidth='650px'>
				<fieldset>
					<Center fontSize='1.1em' color='green.vocdoni' fontWeight='bold'>
						<legend>CREATE ELECTION</legend>
					</Center>
					<WeightingVote
						election={election}
						dispatchElection={dispatchElection}
					/>
					<Description
						election={election}
						dispatchElection={dispatchElection}
					/>
					<Addresses election={election} dispatchElection={dispatchElection} />
					<Questions election={election} dispatchElection={dispatchElection} />
					<Buttons
						election={election}
						dispatchElection={dispatchElection}
						sendQuestion={sendQuestion}
						onOpenLoading={onOpenLoading}
						onCloseLoading={onCloaseLoading}
						onOpenError={onOpenError}
					/>
				</fieldset>
			</FormWrapper>
		</Center>
	);
};

const sendQuestion = (
	election,
	dispatchElection,
	onCloseLoading,
	onOpenError
) => {
	setTimeout(() => {
		onCloseLoading();
		// dispatchElection(
		// 	errorChanged([
		// 		'Error de prueba 1',
		// 		'Error de prueba 2',
		// 		'Error de prueba 3'
		// 	])
		// );
		// onOpenError();
	}, 2000);
};

export default CreateElectionWrapper;
