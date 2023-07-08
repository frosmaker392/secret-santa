import { Component, ParentProps } from 'solid-js'
import { A } from '@solidjs/router'

import { ColorType } from 'types/design'

interface NavbarOptionProps extends ParentProps {
  link: string
  onClick?: () => void
  type?: ColorType
}

const NavbarOption: Component<NavbarOptionProps> = (props) => (
  <li data-testid="navbar-option" onClick={() => props.onClick?.()}>
    <A href={props.link} class={props.type ?? 'primary'}>
      {props.children}
    </A>
  </li>
)

export default NavbarOption
