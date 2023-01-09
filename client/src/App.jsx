import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
// import ProjectCard from "./components/ProjectCard";
import NotFound from './pages/NotFound';
import Home from "./pages/Home";
import Project from './pages/Project';


function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="project/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>  
    </>
  );
}

export default App;
