import { email, Field, Form, FormState, required } from '@modular-forms/solid'
import { Component } from 'solid-js'
import { RegisterFormData } from '../../typeDefs'
import Button from '../atoms/Button'
import Input from '../atoms/Input/Input'

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
      of={props.form}
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
    <Field of={props.form} name="passwordConfirm">
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
      aria-busy={props.form.submitting}
      disabled={props.form.submitting}
    >
      Register
    </Button>
  </Form>
)

export default RegisterForm
