import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AppBar from 'components/AppBar/AppBar';
import { getLoggedin } from 'redux/slices/AuthSlice';

const Layout = () => {
  const isLoggedin = useSelector(getLoggedin);
  return (
    <>
      {isLoggedin && <AppBar />}
      <Outlet />
    </>
  );
};

export default Layout;
