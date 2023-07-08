import { createStore } from 'solid-js/store'
import { User } from '../types/api/user'

export interface AppStore {
  currentUser?: User
  hideNavbar: boolean
}

export const [appStore, setAppStore] = createStore<AppStore>({
  hideNavbar: false,
})
