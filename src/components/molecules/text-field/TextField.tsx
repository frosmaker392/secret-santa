import { FieldPath, FieldValues } from '@modular-forms/solid'
import { Show } from 'solid-js'

import { FieldError, TextInput } from 'components/atoms'

import TextFieldProps from 'types/components/text-field-props'

const TextField = <F extends FieldValues, N extends FieldPath<F>>(
  props: TextFieldProps<F, N>
) => {
  const errorName = () => `${props.field.name}-error`

  return (
    <>
      <label data-testid="text-field-label" for={props.field.name}>
        {props.label}
      </label>

      <TextInput
        type={props.type}
        {...props.field.props}
        placeholder={props.placeholder}
        isError={!!props.field.error}
        errorId={errorName()}
      />

      <Show when={props.field.error}>
        <FieldError errorId={errorName()}>{props.field.error}</FieldError>
      </Show>
    </>
  )
}

export default TextField
