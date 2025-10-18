import React, { useEffect, useState } from 'react'
import { me, logout } from '../api'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function load() {
      try {
        const data = await me()
        setUser(data.user)
      } catch {
        setError('Not authenticated')
      }
    }
    load()
  }, [])

  async function handleLogout() {
    await logout()
    navigate('/login')
  }

  if (error) return <div className="text-center text-danger mt-5">{error}</div>
  if (!user) return <div className="text-center mt-5 text-light">Loading...</div>

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 text-center" style={{ width: '24rem' }}>
        <h2 className="mb-3">Dashboard</h2>
        <p>Welcome <strong>{user.name}</strong></p>
        <p className="text-muted">{user.email}</p>
        <button onClick={handleLogout} className="btn btn-gradient mt-3 w-100">Logout</button>
      </div>
    </div>
  )
}
