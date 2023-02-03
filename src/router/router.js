import {
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import CreateElection from './pages/CreateElection';
import Home from './pages/Home';
import MyElections from './pages/MyElections';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path='createelection' element={<CreateElection />} />
			<Route path='myelections' element={<MyElections />} />
		</Route>
	)
);

export default router;
