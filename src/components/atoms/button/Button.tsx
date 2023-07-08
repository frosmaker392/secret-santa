import { Component, JSX } from 'solid-js'

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>

const Button: Component<ButtonProps> = (props) => {
  return <button {...props}>{props.children}</button>
}

export default Button
