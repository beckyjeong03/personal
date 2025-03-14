import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Skills } from '../components/Skills';
import { Project } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Work = () => {
  return (
    <div className="App">
      <NavBar />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

// export default Work;
