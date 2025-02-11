// libs
import 'resetcss_khc';
import { Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// routes
import ROUTES from './router/routes';

// styles
import './css/general.css';

function App() {
  return (
    <Routes>
      <Route path={ ROUTES.HOME } element={ <HomePage /> }/>
      <Route path={ ROUTES.NOT_FOUND } element={ <NotFoundPage /> }/>
    </Routes>
  );
}

export default App;
