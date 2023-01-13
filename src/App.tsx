import { Route, Routes } from '@solidjs/router'
import PocketBase from 'pocketbase'
import { Component } from 'solid-js'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import AppTemplate from './components/templates/AppTemplate'
import { PocketBaseProvider } from './providers/PocketBaseProvider'

const pb = new PocketBase('http://127.0.0.1:8090')

const App: Component = () => (
  <PocketBaseProvider value={pb}>
    <AppTemplate loggedIn={false}>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Routes>
    </AppTemplate>
  </PocketBaseProvider>
)

export default App