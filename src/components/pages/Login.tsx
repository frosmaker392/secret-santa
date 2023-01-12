import { A } from '@solidjs/router'
import { ClientResponseError } from 'pocketbase'
import { Component, useContext } from 'solid-js'
import { PocketBaseContext } from '../../providers/PocketBaseProvider'
import { createForm, Form, Field, required } from '@modular-forms/solid'

import Button from '../atoms/Button'
import Input from '../atoms/Input'
import useFormSubmit from '../../hooks/useFormSubmit'

type LoginForm = {
  usernameOrEmail: string
  password: string
}

const Login: Component = () => {
  const pb = useContext(PocketBaseContext)
  const loginForm = createForm<LoginForm>()

  const onLogin = async (form: LoginForm) => {
    const response = await pb()
      .collection('users')
      .authWithPassword(form.usernameOrEmail, form.password)

    console.log(response)
  }

  return (
    <main>
      <Form of={loginForm} onSubmit={onLogin}>
        <Field
          of={loginForm}
          name="usernameOrEmail"
          validate={[required('Username/email is required!')]}
        >
          {(field) => (
            <Input
              {...field.props}
              type="text"
              label="Username or email"
              value={field.value}
              error={field.error}
            />
          )}
        </Field>
        <Field
          of={loginForm}
          name="password"
          validate={[required('Password is required!')]}
        >
          {(field) => (
            <Input
              {...field.props}
              type="password"
              label="Password"
              value={field.value}
              error={field.error}
            />
          )}
        </Field>

        <Button
          type="submit"
          aria-busy={loginForm.submitting}
          disabled={loginForm.submitting}
        >
          Login
        </Button>
        <A href="/register">Register</A>
      </Form>
    </main>
  )
}

export default Login
