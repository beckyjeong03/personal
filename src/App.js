import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Project } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { useRoutes, Routes, Route } from 'react-router-dom';

import {Home} from './pages/home';
import {Work} from './pages/work';
import { WorkDescription } from './pages/WorkDescription';
import { Tidepool } from './pages/Work/tidepool';

function App() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },

    { path: '/personal', element: <Home /> },
    { path: '/work', element: <Work /> },
    { path: '/tidepool', element: <Tidepool/>},
    { path: '/Workexperience', element: <WorkDescription/>}
    // ... other routes
  ]);

  return (
    <div>
      <NavBar/>
      {routes}
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Router>
//         <Main />
//       </Router>
//       <Banner />
//       <Skills />
//       <Project />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

export default App;
