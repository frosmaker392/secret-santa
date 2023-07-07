import { A } from '@solidjs/router'
import { Component, ParentProps } from 'solid-js'
import { ColorType } from '../../types/design'

interface NavbarOptionProps extends ParentProps {
  link: string
  onClick?: () => void
  type?: ColorType
}

const NavbarOption: Component<NavbarOptionProps> = (props) => (
  <li>
    <A
      href={props.link}
      onClick={() => props.onClick}
      class={props.type ?? 'primary'}
    >
      {props.children}
    </A>
  </li>
)

export default NavbarOption
