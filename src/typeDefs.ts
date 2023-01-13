export type Optional<T> = T | undefined

// TODO: Organize type definitions
export type LoginFormData = {
  usernameOrEmail: string
  password: string
}

export type RegisterFormData = {
  email: string
  username: string
  password: string
  passwordConfirm: string
}

// Pocketbase types
export interface PBError<T> {
  code: number
  data: T
  message: string
}

export type PBCreateError<T> = PBError<{
  data: { [K in keyof T]: { code: string; message: string } }
}>
