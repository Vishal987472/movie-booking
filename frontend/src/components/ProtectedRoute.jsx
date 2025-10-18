import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { me } from '../api'

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    let mounted = true
    async function check() {
      try {
        const data = await me()
        if (mounted && data.user) setAuthenticated(true)
      } catch (err) {
        setAuthenticated(false)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    check()
    return () => mounted = false
  }, [])

  if (loading) return <div>Loading...</div>
  if (!authenticated) return <Navigate to="/login" replace />
  return children
}
