import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;

const Main = styled.main`
  padding-top: 64px; /* Navbar 높이만큼 여백 */
  min-height: 100vh;
`;