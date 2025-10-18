import React, { useState } from 'react'
import { login } from '../api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const data = await login({ email, password })
      if (data.user) navigate('/dashboard')
      else setError(data.message || 'Login failed')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '22rem' }}>
        <h2 className="text-center mb-4">Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={onSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label">Email</label>
            <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-4 text-start">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-gradient w-100 py-2">Login</button>
        </form>
      </div>
    </div>
  )
}
