import { Component, ComponentProps, Match, Switch } from 'solid-js'
import NavPartialLoggedIn from './NavPartialLoggedIn'
import NavPartialLoggedOut from './NavPartialLoggedOut'

export type NavState = 'loggedIn' | 'loggedOut' | 'hide'

type AllPartialProps = ComponentProps<typeof NavPartialLoggedIn> &
  ComponentProps<typeof NavPartialLoggedOut>

interface NavPartialProps extends AllPartialProps {
  state: NavState
}

const NavPartial: Component<NavPartialProps> = (props) => (
  <Switch>
    <Match when={props.state === 'loggedIn'}>
      <NavPartialLoggedIn {...props} />
    </Match>
    <Match when={props.state === 'loggedOut'}>
      <NavPartialLoggedOut />
    </Match>
  </Switch>
)

export default NavPartial
