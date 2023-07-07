export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const ApiEndpoints = {
  LOGIN: '/login',
  REGISTER: '/register',
  CURRENT_USER: '/current-user',
} as const

export const FORM_CONTENT_TYPE_HEADER = {
  'Content-Type': 'application/x-www-form-urlencoded',
} as const
