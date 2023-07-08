import { Component, ParentProps } from 'solid-js'

import styles from './FieldError.module.css'

interface FieldErrorProps extends ParentProps {
  errorId: string
}

const FieldError: Component<FieldErrorProps> = (props) => (
  <small data-testid="field-error" id={props.errorId} class={styles.fieldError}>
    {props.children}
  </small>
)

export default FieldError
