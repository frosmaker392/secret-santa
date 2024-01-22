import { Component } from 'solid-js';

import { NavbarButtonProps } from './NavbarButton.types';

const NavbarButton: Component<NavbarButtonProps> = (props) => (
    <li>
        <a href="#" onClick={() => props.onClick()} role="button">
            {props.children}
        </a>
    </li>
);

export default NavbarButton;
