import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAccount } from 'wagmi';

const UNPROTECTED_ROUTES = ['/'];

const ProtectedRoutes = () => {
	const { isConnected } = useAccount();
	const location = useLocation();

	return UNPROTECTED_ROUTES.includes(location.pathname) || isConnected ? (
		<Outlet />
	) : (
		<Navigate to='/' replace={true} />
	);
};

export default ProtectedRoutes;
