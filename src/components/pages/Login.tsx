import { A, useNavigate } from '@solidjs/router'
import { Component, useContext } from 'solid-js'
import { PocketBaseContext } from '../../providers/PocketBaseProvider'
import { createForm, setError } from '@modular-forms/solid'

import LoginForm from '../organisms/LoginForm'
import { LoginFormData } from '../../typeDefs'
import useHideNav from '../../hooks/useHideNav'

const Login: Component = () => {
  useHideNav()

  const pb = useContext(PocketBaseContext)
  const loginForm = createForm<LoginFormData>()

  const navigate = useNavigate()

  const onLogin = async (form: LoginFormData) => {
    try {
      await pb()
        .collection('users')
        .authWithPassword(form.usernameOrEmail, form.password)

      navigate('/')
    } catch {
      setError(loginForm, 'usernameOrEmail', 'Invalid login credentials!')
      setError(loginForm, 'password', 'Invalid login credentials!')
    }
  }

  return (
    <article>
      <LoginForm form={loginForm} onLogin={onLogin} />
      <p>
        Don't have an account? <A href="/register">Register</A>
      </p>
    </article>
  )
}

export default Login
