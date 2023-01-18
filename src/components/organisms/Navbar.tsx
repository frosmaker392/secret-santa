import { A } from '@solidjs/router'
import { Component, ComponentProps } from 'solid-js'
import NavPartial from '../molecules/navbarPartials/NavPartial'

type NavbarProps = ComponentProps<typeof NavPartial>

const Navbar: Component<NavbarProps> = (props) => (
  <nav class="container-fluid">
    <ul>
      <li>
        <A href="/">Secret Santa</A>
      </li>
    </ul>

    <ul>
      <NavPartial {...props} />
    </ul>
  </nav>
)

export default Navbar
