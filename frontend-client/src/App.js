import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage/landingpage';
import Login from './pages/Login/login';
import MyLoan from './pages/MyLoans/myLoans';

function App() {
  return (
    <Routes>
        <Route path="/" element = { <LandingPage /> }></Route>
        <Route path="/login" element = { <Login /> }></Route>
        <Route path="/my_loans" element = { <MyLoan /> }></Route>
    </Routes>
  );
}

export default App;