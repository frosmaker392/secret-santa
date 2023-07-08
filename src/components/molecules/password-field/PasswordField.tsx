import { FieldValues, FieldPath } from '@modular-forms/solid'
import { createSignal, Show } from 'solid-js'

import { FieldError, TextInput } from 'components/atoms'
import TextFieldProps from 'types/components/text-field-props'

import styles from './PasswordField.module.css'

type PasswordFieldProps<F extends FieldValues, N extends FieldPath<F>> = Omit<
  TextFieldProps<F, N>,
  'type'
>
type PasswordInputType = 'password' | 'text'

const PasswordField = <F extends FieldValues, N extends FieldPath<F>>(
  props: PasswordFieldProps<F, N>
) => {
  const [inputType, setInputType] = createSignal<PasswordInputType>('password')

  const toggleInputType = () =>
    setInputType((prevType) => (prevType === 'text' ? 'password' : 'text'))

  const iconClass = () =>
    `fa-solid ${inputType() === 'password' ? 'fa-eye' : 'fa-eye-slash'} ${
      styles.showPass
    }`

  const errorName = () => `${props.field.name}-error`

  return (
    <>
      <label data-testid="password-field-label" for={props.field.name}>
        {props.label}
      </label>

      <div class={styles.inputContainer}>
        <TextInput
          type={inputType()}
          {...props.field.props}
          isError={!!props.field.error}
          errorId={errorName()}
        />
        <i
          data-testid="password-reveal-icon"
          class={iconClass()}
          onClick={toggleInputType}
        />
      </div>

      <Show when={props.field.error}>
        <FieldError errorId={errorName()}>{props.field.error}</FieldError>
      </Show>
    </>
  )
}

export default PasswordField
