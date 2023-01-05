import Header from './Header';
import { Outlet } from 'react-router-dom';
// Outlet represents all of the children

const Layout = () => {
  return (
    <>
      <Header />
      <main className='App'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
