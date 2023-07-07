import { Unauthorized } from './common'

export interface User {
  username: string
  name: string
}

export interface CurrentUser {
  type: 'success'
  user: User
}

export type CurrentUserResult = CurrentUser | Unauthorized
