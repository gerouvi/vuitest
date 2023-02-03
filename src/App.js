import { ChakraProvider, Text, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeSwitcher justifySelf='flex-end' />
			<Text as='h1'>Hello</Text>
		</ChakraProvider>
	);
}

export default App;
