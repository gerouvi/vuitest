import {
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import CreateElection from '../pages/CreateElection';
import Home from '../pages/Home';

import MyElections from '../pages/MyElections';
import ProtectedRoutes from '../utils/ProtectedRoutes';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<ProtectedRoutes />}>
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path='createelection' element={<CreateElection />} />
				<Route path='myelections' element={<MyElections />} />
			</Route>
		</Route>
	)
);

export default router;
