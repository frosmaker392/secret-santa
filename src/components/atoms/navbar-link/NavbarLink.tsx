import { A } from '@solidjs/router';
import { Component } from 'solid-js';

import { NavbarLinkProps } from './NavbarLink.types';

const NavbarLink: Component<NavbarLinkProps> = (props) => (
    <li>
        <A href={props.url} class={props.variant ?? ''} onClick={props.onClick}>
            {props.children}
        </A>
    </li>
);

export default NavbarLink;
