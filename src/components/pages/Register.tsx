import { createForm, setError } from '@modular-forms/solid'
import { A, useNavigate } from '@solidjs/router'
import { Component, onMount } from 'solid-js'
import RegisterForm, { RegisterFormData } from '../organisms/RegisterForm'
import useApiRegister from '../../hooks/api/useApiRegister'
import useApiLogin from '../../hooks/api/useApiLogin'
import { API_BASE_URL } from '../../constants/api'
import { setAppStore } from '../../stores/app-store'

const Register: Component = () => {
  const navigate = useNavigate()

  const registerForm = createForm<RegisterFormData>()
  const register = useApiRegister(API_BASE_URL)
  const login = useApiLogin(API_BASE_URL)

  const onRegister = async (form: RegisterFormData) => {
    try {
      const result = await register(form)

      if (result.type === 'success') {
        await login({
          username_or_email: form.email,
          password: form.password,
        })
        navigate('/')
      } else if (result.type === 'invalid_fields') {
        for (const invalid_field of result.invalid_fields) {
          setError(registerForm, invalid_field.name, invalid_field.message)
        }
      } else {
        if (result.code === 'EMAIL_EXISTS') {
          setError(registerForm, 'email', 'Email already exists!')
        } else if (result.code === 'USERNAME_EXISTS') {
          setError(registerForm, 'username', 'Username already exists')
        }
      }
    } catch {
      console.error('Failed to establish connection to API server!')
    }
  }

  onMount(() => {
    setAppStore('hideNavbar', true)
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
