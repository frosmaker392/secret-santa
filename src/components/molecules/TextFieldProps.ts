import { FieldPath, FieldState, FieldValues } from '@modular-forms/solid'
import { ComponentProps } from 'solid-js'
import TextInput from '../atoms/TextInput'

type TextFieldProps<F extends FieldValues, N extends FieldPath<F>> = {
  field: FieldState<F, N>
  type: ComponentProps<typeof TextInput>['type']
  placeholder?: string
  label: string
}

export default TextFieldProps
