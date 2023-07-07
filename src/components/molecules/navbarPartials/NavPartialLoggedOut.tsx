import { Component } from 'solid-js'
import NavbarOption from '../../atoms/NavbarOption'
import { AppRoutes } from '../../../constants/app-routes'

const NavPartialLoggedOut: Component = () => (
  <NavbarOption link={AppRoutes.LOGIN}>Login</NavbarOption>
)

export default NavPartialLoggedOut
