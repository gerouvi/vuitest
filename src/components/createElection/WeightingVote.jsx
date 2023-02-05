import {
	Checkbox,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Text
} from '@chakra-ui/react';
import { weightedVotingToggle } from '../../lib/actions/createElectionActions';

const WeightingVote = ({ createElection, dispatchCreateElection }) => (
	<Flex h='30px' gap={4} justifyContent='space-between' alignItems='center'>
		<Checkbox
			variant='vocdoni'
			checked={createElection.weightedVoting.active}
			onChange={() => dispatchCreateElection(weightedVotingToggle())}
		>
			<Text marginTop='3px'>Weighted vote</Text>
		</Checkbox>

		{createElection.weightedVoting.active && (
			<>
				<Flex justifyContent='center' alignItems='center' gap={4}>
					{100 - createElection.weightedVoting.total ? (
						<Text color='red.3'>
							Unfilled {100 - createElection.weightedVoting.total}%
						</Text>
					) : null}

					<CircularProgress
						value={createElection.weightedVoting.total}
						size='40px'
						color='green.vocdoni'
						trackColor='red.3'
						bgClip='text'
					>
						<CircularProgressLabel color='green.vocdoni'>
							{createElection.weightedVoting.total}%
						</CircularProgressLabel>
					</CircularProgress>
				</Flex>
			</>
		)}
	</Flex>
);

export default WeightingVote;
