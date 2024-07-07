// App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SignupPage/Signup';
import Test from './pages/TestPage/Test';
import { AuthProvider } from './Utils/AuthContext';
import PrivateRoute from './Utils/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test/:category" element={
            <PrivateRoute>
              <Test />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
