import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';

import LoginPage from './views/LoginPage';
import WelcomePage from './views/WelcomePage';
import DashboardPage from './views/DashboardPage';
import StartChoicePage from './views/StartChoicePage';
import AllTechniquesPage from './views/AllTechniquesPage';
import BodyPartChoicePage from './views/BodyPartChoicePage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='gasa-web-app-container'>
        <Routes>
          <Route path='/' exact element={<WelcomePage />} />
          {/* <Route path="news" element={<News />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path='login' element={<LoginPage />} />
          <Route
            path='dashboard'
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path='choice'
            element={
              <PrivateRoute>
                <StartChoicePage />
              </PrivateRoute>
            }
          />
          <Route
            path='choice-body-techniques'
            element={
              <PrivateRoute>
                <BodyPartChoicePage />
              </PrivateRoute>
            }
          />
          <Route
            path='all-techniques'
            element={
              <PrivateRoute>
                <AllTechniquesPage />
              </PrivateRoute>
            }
          />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// architecrture based on https://www.knowledgehut.com/blog/web-development/react-js-architecture
// styles not touched yet
