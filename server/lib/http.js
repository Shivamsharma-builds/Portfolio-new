export const clean = (value, maxLength) => String(value ?? '').trim().slice(0, maxLength)

export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const jsonMethod = (req, res, method) => {
  if (req.method !== method) {
    res.setHeader('Allow', method)
    res.status(405).json({ error: `Method ${req.method} not allowed.` })
    return false
  }
  return true
}

export const handleApiError = (res, error) => {
  console.error(error)
  return res.status(500).json({ error: 'Internal server error.' })
}
