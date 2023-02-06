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

	const [modalType, setModalType] = useState();

	const [id, setId] = useState('');

	useEffect(() => {
		if (!modalType) return;
		onOpen();
	}, [modalType]);

	return (
		<Center flexDirection='column'>
			<CustomModal
				isOpen={isOpen}
				onClose={onClose}
				modal={modalType}
				id={id}
			/>

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
						handleSendQuestion={() =>
							handleSendQuestion(createElection, signer, setModalType, setId)
						}
					/>
				</fieldset>
			</FormWrapper>
		</Center>
	);
};

const handleSendQuestion = async (
	createElection,
	signer,
	setModalType,
	setId
) => {
	setModalType('loading');
	if (createElection.weightedVoting.active) return setModalType('warning');

	try {
		const client = getClient(signer);

		await updateBalance(client);

		const census = await getCensus(signer, createElection.addresses);

		const id = await createElectionFn(createElection, census, client);

		console.log(id);
		setId(id);
		setModalType('success');
	} catch (err) {
		console.log(err.message);
		setModalType('error');
	}
};

export default CreateElection;
