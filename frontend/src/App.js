import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard'; // YE WALI LINE ZAROOR DALO
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Make sure path matches what you use in Navigate after login */}
        <Route path="/admin" element={<AdminDashboard />} /> 
      </Routes>
    </Router>
  );
}
export default App;