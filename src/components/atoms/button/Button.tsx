import { Component } from 'solid-js';

import { ButtonProps } from './Button.types';

const Button: Component<ButtonProps> = (props) => {
    return <button {...props}>{props.children}</button>;
};

export default Button;
