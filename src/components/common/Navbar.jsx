import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {scrollToSection} from "../../utils/scrollTo";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const isProjectsPage = location.pathname.startsWith("/projects");

  const [activeSection, setActiveSection] = useState("hero");

  /* =========================
     Home에서 섹션 감지
  ========================= */
  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          root: null,
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0,
        }
    );

    ["hero", "experience", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  /* =========================
     Active 메뉴 계산
  ========================= */
  let activeMenu = "home";
  if (isProjectsPage) {
    activeMenu = "projects";
  } else if (activeSection === "contact") {
    activeMenu = "contact";
  }

  /* =========================
     네비 클릭 핸들러
  ========================= */
  function handleNavClick(e, sectionId) {
    e.preventDefault();

    // Home
    if (sectionId === "hero") {
      navigate("/");
      window.scrollTo({top: 0, behavior: "smooth"});
      return;
    }

    // Contact
    if (sectionId === "contact") {
      if (isHomePage) {
        scrollToSection("contact");
      } else {
        navigate("/");
        setTimeout(() => {
          scrollToSection("contact");
        }, 0);
      }
    }
  }

  return (
      <Nav>
        <Container>
          <Logo to="/">Portfolio</Logo>

          <Menu>
            <MenuItem $active={activeMenu === "home"}>
              <a href="#hero" onClick={(e) => handleNavClick(e, "hero")}>
                Home
              </a>
            </MenuItem>

            <MenuItem $active={activeMenu === "projects"}>
              <StyledLink to="/projects">Projects</StyledLink>
            </MenuItem>

            <MenuItem $active={activeMenu === "contact"}>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
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
  background-color: ${({theme}) => theme.colors.background};
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
  z-index: ${({theme}) => theme.zIndex.navbar};
  backdrop-filter: blur(8px);
  background-color: rgba(15, 23, 42, 0.8);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme}) => theme.spacing.md};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: ${({theme}) => theme.typography.fontSize.xl};
  font-weight: ${({theme}) => theme.typography.fontWeight.bold};
  color: ${({theme}) => theme.colors.primary};
  transition: color ${({theme}) => theme.transition.normal};

  &:hover {
    color: ${({theme}) => theme.colors.primaryLight};
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: ${({theme}) => theme.spacing.lg};
`;

const MenuItem = styled.li`
  a {
    font-size: ${({theme}) => theme.typography.fontSize.base};
    font-weight: ${({theme}) => theme.typography.fontWeight.medium};
    color: ${({$active, theme}) =>
        $active ? theme.colors.primary : theme.colors.textSub};
    transition: color ${({theme}) => theme.transition.normal};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: ${({$active}) => ($active ? "100%" : "0")};
      height: 2px;
      background-color: ${({theme}) => theme.colors.primary};
      transition: width ${({theme}) => theme.transition.normal};
    }

    &:hover {
      color: ${({theme}) => theme.colors.textMain};

      &::after {
        width: 100%;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: ${({theme}) => theme.typography.fontSize.base};
  font-weight: ${({theme}) => theme.typography.fontWeight.medium};
  color: ${({theme}) => theme.colors.textSub};
  transition: color ${({theme}) => theme.transition.normal};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({theme}) => theme.colors.primary};
    transition: width ${({theme}) => theme.transition.normal};
  }

  &:hover {
    color: ${({theme}) => theme.colors.textMain};

    &::after {
      width: 100%;
    }
  }
`;