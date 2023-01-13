import { A } from '@solidjs/router'
import { Component, useContext } from 'solid-js'
import { PocketBaseContext } from '../../providers/PocketBaseProvider'
import { createForm } from '@modular-forms/solid'

import LoginForm from '../organisms/LoginForm'
import { LoginFormData } from '../../typeDefs'

const Login: Component = () => {
  const pb = useContext(PocketBaseContext)
  const loginForm = createForm<LoginFormData>()

  const onLogin = async (form: LoginFormData) => {
    const response = await pb()
      .collection('users')
      .authWithPassword(form.usernameOrEmail, form.password)

    console.log(response)
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
