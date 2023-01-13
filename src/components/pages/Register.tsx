import { createForm } from '@modular-forms/solid'
import { A } from '@solidjs/router'
import { Component, useContext } from 'solid-js'
import useFormSubmit from '../../hooks/useFormSubmit'
import { PocketBaseContext } from '../../providers/PocketBaseProvider'
import { RegisterFormData } from '../../typeDefs'
import RegisterForm from '../organisms/RegisterForm'

const Register: Component = () => {
  const pb = useContext(PocketBaseContext)
  const registerForm = createForm<RegisterFormData>()

  const onRegister = useFormSubmit(registerForm, async (form) => {
    const response = await pb().collection('users').create(form)

    console.log(response)
  })

  return (
    <main class="container">
      <RegisterForm form={registerForm} onRegister={onRegister} />
      <p>
        Already have an account? <A href="/login">Login</A>
      </p>
    </main>
  )
}

export default Register
