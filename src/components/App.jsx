import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainBar from './MainBar/MainBar';
import Register from 'pages/register';
import Login from 'pages/login';
// import User from 'pages/user';
import { Home } from 'pages/home';
import Contacts from 'pages/contacts';
import { authOperations } from 'redux/auth/auth-operations';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

// const MainBar = lazy(() => import('./MainBar/MainBar'));
// const Home = lazy(() => import('../pages/home'));
// const Contacts = lazy(() => import('../pages/contacts'));
// const Register = lazy(() => import('../pages/register'));
// const Login = lazy(() => import('../pages/login'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainBar />}>
          <Route index element={<Home />} />

          {/* <Route path="/contacts" element={<Contacts />} /> */}
          <Route path="/register" restricted element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/login" restricted element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/contacts" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
