import { Component } from 'solid-js'
import { Field, Form, FormState, required } from '@modular-forms/solid'

import Button from '../atoms/Button'
import PasswordField from '../molecules/PasswordField'
import TextField from '../molecules/TextField'

export type LoginFormData = {
  usernameOrEmail: string
  password: string
}

interface LoginFormProps {
  form: FormState<LoginFormData>
  onLogin: (form: LoginFormData) => Promise<void>
}

const LoginForm: Component<LoginFormProps> = (props) => (
  <Form of={props.form} onSubmit={(form) => props.onLogin(form)}>
    <Field
      of={props.form}
      name="usernameOrEmail"
      validate={[required('Username/email is required!')]}
    >
      {(field) => (
        <TextField type="text" field={field} label="Username or Email" />
      )}
    </Field>
    <Field
      of={props.form}
      name="password"
      validate={[required('Password is required!')]}
    >
      {(field) => <PasswordField field={field} label="Password" />}
    </Field>

    <Button
      type="submit"
      aria-busy={props.form.submitting}
      disabled={props.form.submitting}
    >
      Login
    </Button>
  </Form>
)

export default LoginForm
