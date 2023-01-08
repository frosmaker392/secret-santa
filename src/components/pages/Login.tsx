import { ClientResponseError } from 'pocketbase'
import { Component, useContext } from 'solid-js'
import { PocketBaseContext } from '../../providers/PocketBaseProvider'
import { Optional } from '../../typeDefs'
import Button from '../atoms/Button'
import InputField from '../atoms/InputField'

type InputRefOpt = Optional<HTMLInputElement>

const Login: Component = () => {
  let usernameRef: InputRefOpt, passwordRef: InputRefOpt

  const pb = useContext(PocketBaseContext)

  const onLogin = async (e: Event) => {
    e.preventDefault()

    if (usernameRef && passwordRef) {
      pb()
        .collection('users')
        .authWithPassword(usernameRef.value, passwordRef.value)
        .then((res) => console.log(res))
        .catch((err: ClientResponseError) => console.log(err))
    }
  }

  return (
    <main>
      <form onSubmit={onLogin}>
        <InputField
          fieldName="Username"
          name="username"
          type="text"
          ref={usernameRef}
        />
        <InputField
          fieldName="Password"
          name="password"
          type="password"
          ref={passwordRef}
        />

        <Button type="submit">Login</Button>
      </form>
    </main>
  )
}

export default Login
