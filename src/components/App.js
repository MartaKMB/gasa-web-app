import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from '../containers/PrivateRoute';

import LoginPage from './LoginPage/LoginPage';
import WelcomePage from './WelcomePage/WelcomePage';
import DashboardPage from './DashboardPage/DashboardPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="gasa-web-app-container">
        <Routes>
          <Route path="/" exact element={<WelcomePage />} />
          {/* <Route path="news" element={<News />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;