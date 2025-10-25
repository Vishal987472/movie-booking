import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import 'bootstrap/dist/css/bootstrap.min.css'
import './theme.css'

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark">
        <div className="container justify-content-center gap-4 py-2">
          {/* <Link className="nav-link" to="/">Home</Link> */}
          <Link className="nav-link" to="/register">Register</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <Routes>
        {/* <Route path="/" element={<div className="text-center mt-5">Home</div>} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  )
}
