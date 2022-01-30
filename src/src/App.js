import './App.css';
import {Routes, Route} from 'react-router-dom'
import { LandingPage } from './Components/LandingPage';
import { LoginPage } from './Components/LoginPage';
import { RegisterPage } from './Components/RegisterPage';
import { HomePage } from './Components/HomePage';

function App() {
  return (
 
                <Routes>
                    <Route exact path="/" element={ <LandingPage />} />
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/home" element={ <HomePage /> } />
                </Routes>
  );
}

export default App;
