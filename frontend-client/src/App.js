import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage/landingpage';

function App() {
  return (
    <Routes>
        <Route path="/" element = { <LandingPage /> }></Route>
    </Routes>
  );
}

export default App;