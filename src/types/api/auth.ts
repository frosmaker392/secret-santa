export type RegisterConflictCode = 'EMAIL_EXISTS' | 'USERNAME_EXISTS'

export interface LoginForm {
  username_or_email: string
  password: string
}

export interface RegisterForm {
  email: string
  username: string
  name: string
  password: string
}

interface InvalidRegisterField {
  name: keyof RegisterForm
  message: string
}

export interface RegisterSuccess {
  type: 'success'
}

export interface RegisterInvalidFields {
  type: 'invalid_fields'
  invalid_fields: InvalidRegisterField[]
}

export interface RegisterConflict {
  type: 'conflict'
  code: RegisterConflictCode
}

export type RegisterResult =
  | RegisterSuccess
  | RegisterInvalidFields
  | RegisterConflict
