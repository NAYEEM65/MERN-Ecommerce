import './App.css';
import UserLogin from './components/Auth/UserLogin';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserLogin />} />
        </Routes>
    );
}

export default App;
