import { Component } from 'solid-js'
import NavbarOption from '../../atoms/NavbarOption'
import { AppRoutes } from '../../../constants/app-routes'

interface NavPartialLoggedInProps {
  username: string
  onClickLogout: () => void
}

const NavPartialLoggedIn: Component<NavPartialLoggedInProps> = (props) => (
  <>
    <NavbarOption link="/profile">@{props.username}</NavbarOption>
    <NavbarOption link="/groups">Groups</NavbarOption>
    <NavbarOption
      link={AppRoutes.ROOT}
      onClick={() => props.onClickLogout()}
      type="secondary"
    >
      Logout
    </NavbarOption>
  </>
)

export default NavPartialLoggedIn
