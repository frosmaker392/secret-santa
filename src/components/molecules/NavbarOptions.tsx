import { A } from '@solidjs/router'
import { Component, Show } from 'solid-js'

interface NavbarOptionsProps {
  loggedIn: boolean
  onLogout: () => void
}

const NavbarOptions: Component<NavbarOptionsProps> = (props) => (
  <ul>
    <Show
      when={props.loggedIn}
      fallback={
        <li>
          <A href="/login">Login</A>
        </li>
      }
    >
      <>
        <li>
          <A href="/profile">Profile</A>
        </li>
        <li>
          <A href="/" onClick={() => props.onLogout()}>
            Logout
          </A>
        </li>
      </>
    </Show>
  </ul>
)

export default NavbarOptions
