import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Skills } from '../components/Skills';
import { Project } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactInfo } from '../components/ContactInfo';
export const Home = () => {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <ContactInfo />
      {/* <Footer /> */}
    </div>
  );
};

// export default home;
