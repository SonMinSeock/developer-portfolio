import {HashRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import {GlobalStyle} from "./styles/GlobalStyle";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="projects" element={<Projects/>}/>
              <Route path="projects/:id" element={<ProjectDetail/>}/>
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
  );
}

export default App;