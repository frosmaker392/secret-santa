import { A, useNavigate } from '@solidjs/router'
import { Component, onMount } from 'solid-js'
import { createForm, setError } from '@modular-forms/solid'

import LoginForm, { LoginFormData } from '../organisms/LoginForm'
import useApiLogin from '../../hooks/api/useApiLogin'
import { API_BASE_URL } from '../../constants/api'
import { setAppStore } from '../../stores/app-store'
import { AppRoutes } from 'constants/app-routes'

const Login: Component = () => {
  const loginForm = createForm<LoginFormData>()

  const navigate = useNavigate()
  const login = useApiLogin(API_BASE_URL)

  const onLogin = async (form: LoginFormData) => {
    try {
      const isAuthenticated = await login({
        username_or_email: form.usernameOrEmail,
        password: form.password,
      })

      if (!isAuthenticated) {
        setError(loginForm, 'usernameOrEmail', 'Invalid login credentials!')
        setError(loginForm, 'password', 'Invalid login credentials!')
      } else {
        navigate('/')
      }
    } catch {
      console.error('Failed to establish connection to API server!')
    }
  }

  onMount(() => {
    setAppStore('hideNavbar', true)
  })

  return (
    <article>
      <LoginForm form={loginForm} onLogin={onLogin} />
      <p>
        Don't have an account? <A href={AppRoutes.REGISTER}>Register</A>
      </p>
    </article>
  )
}

export default Login
