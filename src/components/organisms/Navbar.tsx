import { Component, Switch, Match, ComponentProps } from 'solid-js'

import { NavbarOption } from 'components/atoms'
import { NavFragmentLoggedIn, NavFragmentLoggedOut } from 'components/molecules'
import { AppRoutes } from 'constants/app-routes'

export type NavbarState = 'hidden' | 'logged-in' | 'logged-out'

type NavbarLoggedInProps = ComponentProps<typeof NavFragmentLoggedIn> & {
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
          <NavFragmentLoggedIn {...(props as NavbarLoggedInProps)} />
        </Match>
        <Match when={props.state === 'logged-out'}>
          <NavFragmentLoggedOut />
        </Match>
      </Switch>
    </ul>
  </nav>
)

export default Navbar
