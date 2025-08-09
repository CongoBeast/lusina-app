import logo from './logo.svg';
import './App.css';
import './index.css';
import {HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';


import Home from "./pages/home"
import Staff from "./pages/staff"
import TopNavBar from "./components/TopNavbar";
import Blog from "./pages/blog"
import Courses from "./pages/courses"






// ProtectedRoute component to check for authentication
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  
  if (!isAuthenticated) {
    // Redirect to the auth page if not authenticated
    return <Navigate to="/auth" replace />;
  }

  return children;
};


function App() {
  return (
    <Router>

        <TopNavBar/>
        <Routes>
          {/* Public route */}
          <Route path="/" element={<Home/>} />
          <Route path="/staff" element={<Staff/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/courses" element={<Courses/>} />



          
          {/* Protected routes */}
          {/* <Route path="/" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } /> */}

          {/* Optional: Redirect any unknown paths to /auth or / */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Router>
  );
}

export default App;