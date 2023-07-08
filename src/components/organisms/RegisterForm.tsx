import { Component } from 'solid-js'
import { email, Field, Form, FormState, required } from '@modular-forms/solid'

import { Button } from 'components/atoms'
import { PasswordField, TextField } from 'components/molecules'

export type RegisterFormData = {
  email: string
  username: string
  name: string
  password: string
  passwordConfirm: string
}

interface RegisterFormProps {
  form: FormState<RegisterFormData>
  onRegister: (form: RegisterFormData) => Promise<void>
}

const RegisterForm: Component<RegisterFormProps> = (props) => (
  <Form of={props.form} onSubmit={(form) => props.onRegister(form)}>
    <Field
      of={props.form}
      name="email"
      validate={[
        required('Email is required!'),
        email('Invalid email address!'),
      ]}
    >
      {(field) => (
        <TextField
          field={field}
          type="email"
          label="Email"
          placeholder="example@domain.com"
        />
      )}
    </Field>
    <Field
      of={props.form}
      name="username"
      validate={[required('Username is required!')]}
    >
      {(field) => <TextField field={field} type="text" label="Username" />}
    </Field>
    <Field of={props.form} name="name">
      {(field) => <TextField field={field} type="text" label="Display Name" />}
    </Field>
    <Field
      of={props.form}
      name="password"
      validate={[required('Password is required!')]}
    >
      {(field) => <PasswordField field={field} label="Password" />}
    </Field>
    <Field of={props.form} name="passwordConfirm">
      {(field) => <PasswordField field={field} label="Confirm password" />}
    </Field>

    <Button
      type="submit"
      aria-busy={props.form.submitting}
      disabled={props.form.submitting}
    >
      Register
    </Button>
  </Form>
)

export default RegisterForm
