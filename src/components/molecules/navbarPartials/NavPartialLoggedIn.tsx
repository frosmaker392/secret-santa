import { Component } from 'solid-js'
import NavbarOption from '../../atoms/NavbarOption'

interface NavPartialLoggedInProps {
  onLogout: () => void
}

const NavPartialLoggedIn: Component<NavPartialLoggedInProps> = (props) => (
  <>
    <NavbarOption link="/profile">Profile</NavbarOption>
    <NavbarOption link="/groups">Groups</NavbarOption>
    <NavbarOption link="/" onClick={() => props.onLogout}>
      Logout
    </NavbarOption>
  </>
)

export default NavPartialLoggedIn
