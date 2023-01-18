import { A } from '@solidjs/router'
import { Component, ParentProps } from 'solid-js'

interface NavbarOptionProps extends ParentProps {
  link: string
  onClick?: () => void
}

const NavbarOption: Component<NavbarOptionProps> = (props) => (
  <li>
    <A href={props.link} onClick={() => props.onClick}>
      {props.children}
    </A>
  </li>
)

export default NavbarOption
