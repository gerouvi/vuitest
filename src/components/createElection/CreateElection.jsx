import { Center, useDisclosure } from '@chakra-ui/react';
import { useEffect, useReducer, useState } from 'react';
import { useAccount, useSigner } from 'wagmi';
import {
	createElectionFn,
	getCensus,
	getClient,
	updateBalance
} from '../../lib/api/sdkApi';
import createElectionReducer, {
	getCreateElectionInitialValues
} from '../../lib/reducers/createElectionReducer';
import FormWrapper from '../forms/FormWrapper';
import CustomModal from '../Modals/CustomModal';
import Addresses from './Addresses';
import Buttons from './Buttons';
import Description from './Description';
import Questions from './Questions';
import WeightingVote from './WeightingVote';

const CreateElection = () => {
	const { address } = useAccount();
	const { data: signer } = useSigner();

	const [createElection, dispatchCreateElection] = useReducer(
		createElectionReducer,
		address,
		getCreateElectionInitialValues
	);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const [modal, setModal] = useState('');

	useEffect(() => {
		if (!modal) return;
		onOpen();
	}, [modal]);

	return (
		<Center flexDirection='column'>
			<CustomModal isOpen={isOpen} onClose={onClose} modal={modal} />

			<FormWrapper width='90vw' maxWidth='650px'>
				<fieldset>
					<Center fontSize='1.1em' color='green.vocdoni' fontWeight='bold'>
						<legend>CREATE ELECTION</legend>
					</Center>
					<WeightingVote
						createElection={createElection}
						dispatchCreateElection={dispatchCreateElection}
					/>
					<Description
						createElection={createElection}
						dispatchCreateElection={dispatchCreateElection}
					/>
					<Addresses
						createElection={createElection}
						dispatchCreateElection={dispatchCreateElection}
					/>
					<Questions
						createElection={createElection}
						dispatchCreateElection={dispatchCreateElection}
					/>
					<Buttons
						dispatchCreateElection={dispatchCreateElection}
						handleSendQuestion={() => {
							setModal('loading');
							handleSendQuestion(createElection, signer, setModal);
						}}
					/>
				</fieldset>
			</FormWrapper>
		</Center>
	);
};

const handleSendQuestion = async (createElection, signer, setModal) => {
	if (createElection.weightedVoting.active) return setModal('warning');

	try {
		const client = getClient(signer);
		await updateBalance(client);
		const census = await getCensus(signer, createElection.addresses);
		await createElectionFn(createElection, census, client);
		setModal('success');
	} catch (err) {
		setModal('error');
	}
};

export default CreateElection;
