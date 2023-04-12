import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Home from 'pages/home/Home';
import Register from 'pages/register/Register';
import Login from 'pages/login/Login';
import Contacts from 'pages/contacts/Contacts';
import { ErrorPage } from 'pages/error/Error';
import Navigation from './navigation/Navigation';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/authOperations';

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    !isRefreshing && 
      <>
        <Navigation />

        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<PublicRoute children={<Home />} />} />
            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/contacts" children={<Register />} />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" children={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" children={<Contacts />} />
              }
            />
            <Route element={<ErrorPage />} path="*" />
          </Routes>
        </Suspense>
      </>
    
  );
};
export default App;
