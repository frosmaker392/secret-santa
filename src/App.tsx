import { Route, Routes } from '@solidjs/router'
import PocketBase from 'pocketbase'
import { Component, onCleanup } from 'solid-js'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import AppTemplate from './components/templates/AppTemplate'
import useUserStore from './hooks/useUserStore'
import { PocketBaseProvider } from './providers/PocketBaseProvider'

const pb = new PocketBase('http://127.0.0.1:8090')

const App: Component = () => {
  const onLogout = () => pb.authStore.clear()
  const { getUser, removeChangeListener } = useUserStore(pb)

  onCleanup(() => {
    removeChangeListener()
  })

  return (
    <PocketBaseProvider value={pb}>
      <AppTemplate loggedIn={!!getUser()} onLogout={onLogout}>
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Routes>
      </AppTemplate>
    </PocketBaseProvider>
  )
}

export default App
