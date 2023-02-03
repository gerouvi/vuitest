import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

const InputIcon = ({ type, icon, value, onChange, ...props }) => (
	<InputGroup minWidth='80px' width='80px' {...props}>
		<Input type={type} value={value} variant='inputIcon' onChange={onChange} />
		<InputRightElement pointerEvents='none'>{icon}</InputRightElement>
	</InputGroup>
);
export default InputIcon;
