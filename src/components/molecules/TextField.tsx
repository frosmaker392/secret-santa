import { FieldPath, FieldValues } from '@modular-forms/solid'
import { Show } from 'solid-js'
import FieldError from '../atoms/FieldError'
import TextInput from '../atoms/TextInput'
import styles from './TextField.module.css'
import TextFieldProps from './TextFieldProps'

const TextField = <F extends FieldValues, N extends FieldPath<F>>(
  props: TextFieldProps<F, N>
) => {
  const errorName = () => `${props.field.name}-error`

  return (
    <div>
      <label for={props.field.name}>{props.label}</label>
      <TextInput
        type={props.type}
        {...props.field.props}
        placeholder={props.placeholder}
        isError={!!props.field.error}
        errorId={errorName()}
      />

      <Show when={props.field.error}>
        <FieldError errorId={errorName()} class={styles.error}>
          {props.field.error}
        </FieldError>
      </Show>
    </div>
  )
}

export default TextField
