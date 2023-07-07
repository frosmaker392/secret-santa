import { createStore } from 'solid-js/store'

export interface AppStore {
  loggedInUsername?: string
  hideNavbar: boolean
}

export const [appStore, setAppStore] = createStore<AppStore>({
  hideNavbar: false,
})
