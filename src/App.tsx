import { Route, Routes } from '@solidjs/router'
import { Component } from 'solid-js'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import AppTemplate from './components/templates/AppTemplate'
import RouteGuard from './components/pages/RouteGuard'
import { appStore } from './stores/app-store'
import { AppRoutes } from './constants/app-routes'
import Profile from './components/pages/Profile'

const App: Component = () => {
  return (
    <AppTemplate state={appStore} onClickLogout={() => {}}>
      <Routes>
        <Route path={AppRoutes.LOGIN} component={Login} />
        <Route path={AppRoutes.REGISTER} component={Register} />
        <Route path={AppRoutes.ROOT} component={RouteGuard}>
          <Route path={AppRoutes.PROFILE} component={Profile} />
        </Route>
      </Routes>
    </AppTemplate>
  )
}

export default App
