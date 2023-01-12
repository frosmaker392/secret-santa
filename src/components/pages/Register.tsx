import {
  createForm,
  email,
  Field,
  Form,
  required,
  setError,
  //  setError,
} from '@modular-forms/solid'
import { A } from '@solidjs/router'
import { Component, useContext } from 'solid-js'
import useFormSubmit from '../../hooks/useFormSubmit'
import { PocketBaseContext } from '../../providers/PocketBaseProvider'
import { PBCreateError } from '../../typeDefs'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

type RegisterForm = {
  email: string
  username: string
  password: string
  passwordConfirm: string
}

const Register: Component = () => {
  const pb = useContext(PocketBaseContext)
  const registerForm = createForm<RegisterForm>()

  const onRegister = useFormSubmit(registerForm, async (form) => {
    const response = await pb().collection('users').create(form)

    console.log(response)
  })

  return (
    <main>
      <Form of={registerForm} onSubmit={onRegister}>
        <Field
          of={registerForm}
          name="email"
          validate={[
            required('Email is required!'),
            email('Invalid email address!'),
          ]}
        >
          {(field) => (
            <Input
              {...field.props}
              type="email"
              label="Email"
              value={field.value}
              error={field.error}
            />
          )}
        </Field>
        <Field
          of={registerForm}
          name="username"
          validate={[required('Username is required!')]}
        >
          {(field) => (
            <Input
              {...field.props}
              type="text"
              label="Username"
              value={field.value}
              error={field.error}
            />
          )}
        </Field>
        <Field
          of={registerForm}
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
        <Field of={registerForm} name="passwordConfirm">
          {(field) => (
            <Input
              {...field.props}
              type="password"
              label="Confirm password"
              value={field.value}
              error={field.error}
            />
          )}
        </Field>

        <Button
          type="submit"
          aria-busy={registerForm.submitting}
          disabled={registerForm.submitting}
        >
          Register
        </Button>
        <p>
          Already have an account? <A href="/login">Login</A>
        </p>
      </Form>
    </main>
  )
}

export default Register
