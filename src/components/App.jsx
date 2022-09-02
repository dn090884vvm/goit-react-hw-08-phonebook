import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainBar from './MainBar/MainBar';
import Register from 'pages/register';
import Login from 'pages/login';
import { Home } from 'pages/home';
import Contacts from 'components/Contacts/ContactsList';
import { authOperations } from 'redux/auth/auth-operations';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { SectionWrapper } from 'App.styled';
import { GlobalStyle } from 'Globalstyle/GlobalStyle';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <SectionWrapper>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainBar />}>
          <Route index element={<Home />} />

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
    </SectionWrapper>
  );
};
