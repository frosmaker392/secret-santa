import { JSX } from 'solid-js'

export default interface InputProps {
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
