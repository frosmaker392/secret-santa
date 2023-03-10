import { createForm } from '@modular-forms/solid'
import { A } from '@solidjs/router'
import { Component, useContext } from 'solid-js'
import useFormSubmit from '../../hooks/useFormSubmit'
import useHideNav from '../../hooks/useHideNav'
import { PocketBaseContext } from '../../providers/PocketBaseProvider'
import { RegisterFormData } from '../../typeDefs'
import RegisterForm from '../organisms/RegisterForm'

const Register: Component = () => {
  useHideNav()

  const pb = useContext(PocketBaseContext)
  const registerForm = createForm<RegisterFormData>()

  const onRegister = useFormSubmit(registerForm, async (form) => {
    const response = await pb().collection('users').create(form)

    console.log(response)
  })

  return (
    <article>
      <RegisterForm form={registerForm} onRegister={onRegister} />
      <p>
        Already have an account? <A href="/login">Login</A>
      </p>
    </article>
  )
}

export default Register
