import { A } from '@solidjs/router'
import { Component } from 'solid-js'
import NavbarOptions from '../molecules/NavbarOptions'

interface NavbarProps {
  loggedIn: boolean
  onLogout: () => void
}

const Navbar: Component<NavbarProps> = (props) => (
  <nav class="container-fluid">
    <ul>
      <li>
        <A href="/">Secret Santa</A>
      </li>
    </ul>
    <NavbarOptions
      loggedIn={props.loggedIn}
      onLogout={() => props.onLogout()}
    />
  </nav>
)

export default Navbar
