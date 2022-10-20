import {Navigate, useNavigate, useRoutes} from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './components/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import ActivateAccount from "./pages/ActivateAccount";
import storage from "./storage/storage";
import Group from "./pages/Group";
import Profile from "./pages/Profile";

// ----------------------------------------------------------------------

export default function Router() {
    const isAuth = storage.getToken() !== null && storage.getToken() !== undefined;
    return useRoutes([
        {
            path: '/dashboard',
            element: isAuth ? <DashboardLayout/> : <Navigate to={"/login"}/>,

            // element: <DashboardLayout />,

            children: [
                {path: 'app', element: <DashboardApp/>},
                {path: 'groups', element: <Group/>},
                {path: 'user', element: <User/>},
                {path: 'products', element: <Products/>},
                {path: 'blog', element: <Blog/>},
            ],
        },
        {
            path: 'login',
            element: <Login/>,
        },
        {
            path: 'register',
            element: <Register/>,
        },
        {
            path: 'activate',
            element: <ActivateAccount/>,
        },
        {
            path: '/',
            element: <LogoOnlyLayout/>,
            children: [
                {path: '/', element: <Navigate to="/dashboard/app"/>},
                {path: '404', element: <NotFound/>},
                {path: '*', element: <Navigate to="/404"/>},
            ],
        },
        {
            path: '*',
            element: <Navigate to="/404" replace/>,
        },
    ]);
}
