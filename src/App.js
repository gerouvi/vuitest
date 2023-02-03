import { ChakraProvider } from '@chakra-ui/react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import theme from './styles';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />} />
		</Route>
	)
);

function App() {
	return (
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	);
}

export default App;
