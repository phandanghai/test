import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { router } from './router';

const App = () => {
  return (
    <Router>
      <Routes>
        {router.map((route) => {
          const Pages = route.component;
          return <Route key={route.path} path={route.path} element={<Pages />} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;
