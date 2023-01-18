import { Route, Routes } from '@solidjs/router'
import PocketBase from 'pocketbase'
import { Component, createSignal, onCleanup } from 'solid-js'
import { NavState } from './components/molecules/navbarPartials/NavPartial'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import AppTemplate from './components/templates/AppTemplate'
import useUserStore from './hooks/useUserStore'
import { NavStateSetterProvider } from './providers/NavStateSetterProvider'
import { PocketBaseProvider } from './providers/PocketBaseProvider'

const App: Component = () => {
  const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)
  const { removeChangeListener } = useUserStore(pb)

  const [navbarState, setNavbarState] = createSignal<NavState>('loggedOut')

  const removeChangeListenerNav = pb.authStore.onChange((_, model) => {
    if (!model) setNavbarState('loggedOut')
    else setNavbarState('loggedIn')
  })

  const onLogout = () => pb.authStore.clear()

  onCleanup(() => {
    removeChangeListener()
    removeChangeListenerNav()
  })

  return (
    <PocketBaseProvider value={pb}>
      <NavStateSetterProvider value={setNavbarState}>
        <AppTemplate state={navbarState()} onLogout={onLogout}>
          <Routes>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Routes>
        </AppTemplate>
      </NavStateSetterProvider>
    </PocketBaseProvider>
  )
}

export default App
