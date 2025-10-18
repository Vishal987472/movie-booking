const API_BASE = '/api/auth' // proxied to backend

export async function register(payload) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  return res.json()
}

export async function login(payload) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  return res.json()
}

export async function me() {
  const res = await fetch(`${API_BASE}/me`, { credentials: 'include' })
  return res.json()
}

export async function refresh() {
  return fetch(`${API_BASE}/refresh`, { method: 'POST', credentials: 'include' })
}

export async function logout() {
  return fetch(`${API_BASE}/logout`, { method: 'POST', credentials: 'include' })
}
