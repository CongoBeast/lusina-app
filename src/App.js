// import logo from './logo.svg';
// import './App.css';
// import './index.css';
// import {HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// import Home from "./pages/home"
// import Staff from "./pages/staff"
// import TopNavBar from "./components/TopNavbar";
// import Blog from "./pages/blog"
// import Courses from "./pages/courses"
// import ChineseLearning from "./pages/chineseLearning"
// import ChengduTripPlanning from "./pages/ChengduTripPlanning"

// // ProtectedRoute component to check for authentication
// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem('token');
  
//   if (!isAuthenticated) {
//     // Redirect to the auth page if not authenticated
//     return <Navigate to="/auth" replace />;
//   }

//   return children;
// };


// function App() {
//   return (
//     <Router>

//         <TopNavBar/>
//         <Routes>
//           {/* Public route */}
//           <Route path="/" element={<Home/>} />
//           <Route path="/staff" element={<Staff/>} />
//           <Route path="/blog" element={<Blog/>} />
//           <Route path="/courses" element={<Courses/>} />
//           <Route path="/chinese-learning" element={<ChineseLearning />} />
//           <Route path="/trip-planning" element={<ChengduTripPlanning />} />
          
//           {/* Protected routes */}
//           {/* <Route path="/" element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           } /> */}

//           {/* Optional: Redirect any unknown paths to /auth or / */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//     </Router>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import './index.css';
import {HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Home from "./pages/home"
import Staff from "./pages/staff"
import TopNavBar from "./components/TopNavbar";
import Blog from "./pages/blog"
import Courses from "./pages/courses"
import ChineseLearning from "./pages/chineseLearning"
import ChengduTripPlanning from "./pages/ChengduTripPlanning"
import ChatOverlay from "./components/ChatOverlay"

// ProtectedRoute component to check for authentication
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  
  if (!isAuthenticated) {
    // Redirect to the auth page if not authenticated
    return <Navigate to="/auth" replace />;
  }
  
  return children;
};

// Floating Action Button Component
const FloatingChatButton = ({ onClick, isChatOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`floating-chat-button ${isChatOpen ? 'chat-open' : ''}`}
      aria-label={isChatOpen ? "Close chat" : "Open chat"}
    >
      {isChatOpen ? (
        // Close Icon
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ) : (
        // Chat Icon
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
};

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Router>
      <TopNavBar/>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Home/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/chinese-learning" element={<ChineseLearning />} />
        <Route path="/trip-planning" element={<ChengduTripPlanning />} />
        
        {/* Protected routes */}
        {/* <Route path="/" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } /> */}
        
        {/* Optional: Redirect any unknown paths to /auth or / */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      {/* Chat Components */}
      <ChatOverlay 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
      <FloatingChatButton 
        onClick={toggleChat} 
        isChatOpen={isChatOpen} 
      />
    </Router>
  );
}

export default App;