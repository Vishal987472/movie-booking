import jwt from 'jsonwebtoken'

export default function auth(req, res, next) {
  const token = req.cookies.accessToken
  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    return res.status(403).json({ message: 'Token invalid or expired' })
  }
}
