import { ChakraProvider, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import theme from './styles';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeSwitcher justifySelf='flex-end' />
			<Text as='h1'>Hello</Text>
		</ChakraProvider>
	);
}

export default App;
