import { A } from '@solidjs/router'
import { Component, Show } from 'solid-js'

interface NavbarProps {
  loggedIn: boolean
}

const Navbar: Component<NavbarProps> = (props) => (
  <nav class="container-fluid">
    <ul>
      <li>
        <A href="/">Secret Santa</A>
      </li>
    </ul>
    <ul>
      <li>
        <Show when={props.loggedIn} fallback={<A href="/login">Login</A>}>
          <A href="/profile">Profile</A>
        </Show>
      </li>
    </ul>
  </nav>
)

export default Navbar
