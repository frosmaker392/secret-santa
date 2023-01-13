import { Field, Form, FormState, required } from '@modular-forms/solid'
import { Component } from 'solid-js'
import { LoginFormData } from '../../typeDefs'
import Button from '../atoms/Button'
import Input from '../atoms/Input/Input'

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
      of={props.form}
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
      aria-busy={props.form.submitting}
      disabled={props.form.submitting}
    >
      Login
    </Button>
  </Form>
)

export default LoginForm
