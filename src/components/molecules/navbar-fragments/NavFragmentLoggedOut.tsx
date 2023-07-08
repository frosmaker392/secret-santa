import { Component } from 'solid-js'

import { NavbarOption } from 'components/atoms'
import { AppRoutes } from 'constants/app-routes'

const NavFragmentLoggedOut: Component = () => (
  <NavbarOption link={AppRoutes.LOGIN}>Login</NavbarOption>
)

export default NavFragmentLoggedOut
