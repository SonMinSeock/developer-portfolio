import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import FallingStars from './FallingStars';
import CursorGlow from './CursorGlow';

function Layout() {
  return (
    <>
      <CursorGlow />
      <FallingStars />
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
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base};
`;