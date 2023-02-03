import { Flex, FormLabel, Input } from '@chakra-ui/react';

const InputText = ({ label, value, onChange, ...props }) => (
	<Flex flexDirection='column' flexGrow={1} {...props}>
		<FormLabel marginBottom='0px'>{label}</FormLabel>
		<Input variant='inputText' value={value} onChange={onChange} />
	</Flex>
);

export default InputText;
