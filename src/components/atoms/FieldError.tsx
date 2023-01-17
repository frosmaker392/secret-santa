import { Component, ParentProps } from 'solid-js'

interface FieldErrorProps extends ParentProps {
  errorId: string
  class?: string
}

const FieldError: Component<FieldErrorProps> = (props) => (
  <small id={props.errorId} class={props.class}>
    {props.children}
  </small>
)

export default FieldError
