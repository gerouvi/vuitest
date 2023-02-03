import {
	Checkbox,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Text
} from '@chakra-ui/react';
import { weightedVotingChanged } from '../../lib/actions/createElectionActions';

const WeightingVote = ({ election, dispatchElection }) => (
	<Flex h='30px' gap={4} justifyContent='space-between' alignItems='center'>
		<Checkbox
			variant='vocdoni'
			checked={election.weightedVoting.active}
			onChange={() => dispatchElection(weightedVotingChanged())}
		>
			<Text marginTop='3px'>Weighted vote</Text>
		</Checkbox>

		{election.weightedVoting.active && (
			<>
				<Flex justifyContent='center' alignItems='center' gap={4}>
					{100 - election.weightedVoting.total ? (
						<Text color='red.3'>
							Unfilled {100 - election.weightedVoting.total}%
						</Text>
					) : null}

					<CircularProgress
						value={election.weightedVoting.total}
						size='40px'
						color='green.vocdoni'
						trackColor='red.3'
						bgClip='text'
					>
						<CircularProgressLabel color='green.vocdoni'>
							{election.weightedVoting.total}%
						</CircularProgressLabel>
					</CircularProgress>
				</Flex>
			</>
		)}
	</Flex>
);

export default WeightingVote;
