import { ParentComponent } from 'solid-js'

export type Optional<T> = T | undefined

interface ProviderProps<T> {
  value: T
}
export type Provider<T> = ParentComponent<ProviderProps<T>>

// TODO: Organize type definitions
export type LoginFormData = {
  usernameOrEmail: string
  password: string
}

export type RegisterFormData = {
  email: string
  username: string
  name: string
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
