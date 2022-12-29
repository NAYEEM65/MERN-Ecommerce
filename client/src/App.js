import './App.css';
import UserLogin from './components/Auth/UserLogin';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Registration from './components/Auth/Registration';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<Registration />} />
        </Routes>
    );
}

export default App;
