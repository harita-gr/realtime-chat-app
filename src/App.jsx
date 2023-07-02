import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoutes from "./components/PrivateRoutes";

import Room from "./pages/Room";
import LoginPage from "./pages/LoginPage";

import { AuthProvider } from "./utils/AuthContext";

import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* Protected/Private Pages */}
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Room />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
