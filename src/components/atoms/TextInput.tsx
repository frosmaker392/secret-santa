import { Component, JSX } from 'solid-js'

interface TextInputProps {
  ref: (element: HTMLInputElement) => void
  type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date'
  name: string
  value?: string | number
  placeholder?: string
  isError: boolean
  errorId: string
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>
  onChange: JSX.EventHandler<HTMLInputElement, Event>
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>
}

const TextInput: Component<TextInputProps> = (props) => {
  return (
    <input
      {...props}
      aria-invalid={props.isError || undefined}
      aria-errormessage={props.errorId}
    />
  )
}

export default TextInput
