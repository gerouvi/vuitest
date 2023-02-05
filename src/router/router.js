import {
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from 'react-router-dom';
import CreateElection from '../components/createElection/CreateElection';
import CreateElectionError from '../components/createElection/CreateElectionError';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';

import MyElections from '../pages/MyElections';
import NotFound from '../pages/NotFound';
import ProtectedRoutes from '../utils/ProtectedRoutes';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route element={<ProtectedRoutes />}>
				<Route
					path='createelection'
					element={<CreateElection />}
					errorElement={<CreateElectionError />}
				/>
				<Route path='myelections' element={<MyElections />} />
			</Route>

			<Route path='*' element={<NotFound />} />
		</Route>
	)
);

export default router;
