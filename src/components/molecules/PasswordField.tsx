import { FieldValues, FieldPath } from '@modular-forms/solid'
import { createSignal, Show } from 'solid-js'
import FieldError from '../atoms/FieldError'
import TextInput from '../atoms/TextInput'
import TextFieldProps from './TextFieldProps'

import styles from './PasswordField.module.css'

type PasswordFieldProps<F extends FieldValues, N extends FieldPath<F>> = Omit<
  TextFieldProps<F, N>,
  'type'
>
type PasswordInputType = 'password' | 'text'

const PasswordField = <F extends FieldValues, N extends FieldPath<F>>(
  props: PasswordFieldProps<F, N>
) => {
  const [type, setType] = createSignal<PasswordInputType>('password')
  const toggleType = () =>
    setType((prevType) => (prevType === 'text' ? 'password' : 'text'))
  const iconClass = () =>
    `fa-solid ${type() === 'password' ? 'fa-eye' : 'fa-eye-slash'} ${
      styles.showPass
    }`
  const errorName = () => `${props.field.name}-error`

  return (
    <>
      <label for={props.field.name}>{props.label}</label>
      <div class={styles.inputContainer}>
        <TextInput
          type={type()}
          {...props.field.props}
          isError={!!props.field.error}
          errorId={errorName()}
        />
        <i class={iconClass()} onClick={toggleType} />
      </div>
      <Show when={props.field.error}>
        <FieldError errorId={errorName()}>{props.field.error}</FieldError>
      </Show>
    </>
  )
}

export default PasswordField
