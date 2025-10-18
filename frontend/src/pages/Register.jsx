import React, { useState } from 'react'
import { register } from '../api'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    setError(null)
    try {
      const data = await register({ name, email, password })
      if (data.user) navigate('/dashboard')
      else setError(data.message || 'Registration failed')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '22rem' }}>
        <h2 className="text-center mb-4">Create Account</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={onSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label">Name</label>
            <input className="form-control" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label">Email</label>
            <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-4 text-start">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-gradient w-100 py-2">Register</button>
        </form>
      </div>
    </div>
  )
}
