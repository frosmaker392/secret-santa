import { Component } from 'solid-js'

import { NavbarOption } from 'components/atoms'
import { AppRoutes } from 'constants/app-routes'

interface NavPartialLoggedInProps {
  username: string
  onClickLogout: () => void
}

const NavFragmentLoggedIn: Component<NavPartialLoggedInProps> = (props) => (
  <>
    <NavbarOption link={AppRoutes.PROFILE}>@{props.username}</NavbarOption>
    <NavbarOption link={AppRoutes.GROUPS}>Groups</NavbarOption>
    <NavbarOption
      link={AppRoutes.ROOT}
      onClick={() => props.onClickLogout()}
      type="secondary"
    >
      Logout
    </NavbarOption>
  </>
)

export default NavFragmentLoggedIn
