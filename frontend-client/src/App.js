import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage/landingpage';
import Login from './pages/Login/login';

function App() {
  return (
    <Routes>
        <Route path="/" element = { <LandingPage /> }></Route>
        <Route path="/login" element = { <Login /> }></Route>
    </Routes>
  );
}

export default App;