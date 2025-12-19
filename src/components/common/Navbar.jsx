import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { scrollToSection } from '../../utils/scrollTo';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectsPage = location.pathname.startsWith('/projects');
  const [activeSection, setActiveSection] = useState('hero');

  // 홈 페이지에서 스크롤 위치에 따라 활성 섹션 감지
  useEffect(() => {
    if (!isHomePage) return;

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // 화면 중앙 기준
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 모든 섹션 관찰
    const sections = ['hero', 'experience', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  // 현재 활성 메뉴 결정
  let activeMenu = 'home';
  if (isProjectsPage) {
    activeMenu = 'projects';
  } else if (isHomePage && activeSection === 'contact') {
    activeMenu = 'contact';
  }

  function handleNavClick(e, sectionId) {
    e.preventDefault();

    if (sectionId === 'hero') {
      // Home 클릭 시
      if (isHomePage) {
        // 이미 홈 페이지면 최상단으로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
      } else {
        // Projects 페이지면 홈으로 이동
        window.location.href = '/';
      }
    } else {
      // Contact 등 다른 섹션
      if (isHomePage) {
        scrollToSection(sectionId);
      } else {
        window.location.href = `/#${sectionId}`;
      }
    }
  }

  return (
    <Nav>
      <Container>
        <Logo to="/">Portfolio</Logo>
        <Menu>
          <MenuItem $active={activeMenu === 'home'}>
            <a href="/" onClick={(e) => handleNavClick(e, 'hero')}>
              Home
            </a>
          </MenuItem>
          <MenuItem $active={activeMenu === 'projects'}>
            <StyledLink to="/projects">Projects</StyledLink>
          </MenuItem>
          <MenuItem $active={activeMenu === 'contact'}>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              Contact
            </a>
          </MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  z-index: ${({ theme }) => theme.zIndex.navbar};
  backdrop-filter: blur(8px);
  background-color: rgba(15, 23, 42, 0.8);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  transition: color ${({ theme }) => theme.transition.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const MenuItem = styled.li`
  a {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.textSub};
    transition: color ${({ theme }) => theme.transition.normal};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: ${({ $active }) => ($active ? '100%' : '0')};
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: width ${({ theme }) => theme.transition.normal};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.textMain};

      &::after {
        width: 100%;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textSub};
  transition: color ${({ theme }) => theme.transition.normal};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transition.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textMain};

    &::after {
      width: 100%;
    }
  }
`;