import { Component, Switch, Match, ComponentProps } from 'solid-js'
import NavPartialLoggedIn from '../molecules/navbarPartials/NavPartialLoggedIn'
import NavPartialLoggedOut from '../molecules/navbarPartials/NavPartialLoggedOut'
import NavbarOption from '../atoms/NavbarOption'
import { AppRoutes } from '../../constants/app-routes'

export type NavbarState = 'hidden' | 'logged-in' | 'logged-out'

type NavbarLoggedInProps = ComponentProps<typeof NavPartialLoggedIn> & {
  state: 'logged-in'
}

type NavbarProps =
  | NavbarLoggedInProps
  | {
      state: 'logged-out' | 'hidden'
    }

const Navbar: Component<NavbarProps> = (props) => (
  <nav class="container-fluid">
    <ul>
      <NavbarOption link={AppRoutes.ROOT}>Secret Santa</NavbarOption>
    </ul>

    <ul>
      <Switch>
        <Match when={props.state === 'logged-in'}>
          <NavPartialLoggedIn {...(props as NavbarLoggedInProps)} />
        </Match>
        <Match when={props.state === 'logged-out'}>
          <NavPartialLoggedOut />
        </Match>
      </Switch>
    </ul>
  </nav>
)

export default Navbar
