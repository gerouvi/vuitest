import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import {
	addAddress,
	addressChanged,
	addressWeightChanged,
	deleteAddress
} from '../../lib/actions/createElectionActions';
import FormSection from '../forms/FormSection';
import InputIcon from '../forms/InputIcon';
import InputText from '../forms/InputText';

const Addresses = ({ election, dispatchElection }) => (
	<FormSection>
		<Flex flexDirection='column' justifyContent='start' gap={3}>
			<Text>User Address</Text>
			<Flex justifyContent='space-between' alignItems='end'>
				<Text isTruncated>{election.addresses[0].address}</Text>
				{election.weightedVoting.active && (
					<InputIcon
						type='number'
						icon='%'
						value={election.addresses[0].weight}
						marginRight='48px'
						onChange={e =>
							dispatchElection(addressWeightChanged(0, e.target.value))
						}
					/>
				)}
			</Flex>
		</Flex>
		{election.addresses.map((address, index) => {
			if (index === 0) return null;
			return (
				<Flex
					key={index}
					justifyContent='space-between'
					alignItems='center'
					gap={4}
				>
					<InputText
						label={`Address ${index + 1}`}
						value={address.address}
						onChange={e =>
							dispatchElection(addressChanged(index, e.target.value))
						}
					/>
					{election.weightedVoting.active && (
						<InputIcon
							type='number'
							icon='%'
							value={election.addresses[index].weight}
							onChange={e =>
								dispatchElection(addressWeightChanged(index, e.target.value))
							}
						/>
					)}
					<IconButton
						size='sm'
						aria-label='delete address'
						variant='iconButtonTransparent'
						_hover={{
							color: 'red.8'
						}}
						icon={<DeleteIcon />}
						onClick={() => dispatchElection(deleteAddress(index))}
					/>
				</Flex>
			);
		})}
		<IconButton
			size='sm'
			alignSelf='start'
			aria-label='add address'
			icon={<AddIcon />}
			variant='iconButtonVocdoni'
			onClick={() => dispatchElection(addAddress())}
		/>
	</FormSection>
);

export default Addresses;
