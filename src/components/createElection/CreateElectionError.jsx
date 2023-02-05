import { Text } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

const CreateElectionError = () => {
	const error = useRouteError();

	return <Text color='red.8'>{error}</Text>;
};

export default CreateElectionError;
