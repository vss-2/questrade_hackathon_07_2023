import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage/landingpage';
import Login from './pages/Login/login';
import MyLoan from './pages/MyLoans/myLoans';
import NewLoan from './pages/NewLoan/newLoan';

function App() {
  return (
    <Routes>
        <Route path="/" element = { <LandingPage /> }></Route>
        <Route path="/login" element = { <Login /> }></Route>
        <Route path="/my_loans" element = { <MyLoan /> }></Route>
        <Route path="/new/loan" element = { <NewLoan /> }></Route>
    </Routes>
  );
}

export default App;