// Stolen from https://modularforms.dev/guides/input-components and modified

import { Component, JSX, Show, splitProps } from 'solid-js'
import styles from './Input.module.css'

type TextInputProps = {
  // eslint-disable-next-line no-unused-vars
  ref: (element: HTMLInputElement) => void
  type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date'
  name: string
  value: string | number | undefined
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>
  onChange: JSX.EventHandler<HTMLInputElement, Event>
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>
  placeholder?: string
  label: string
  error?: string
}

const Input: Component<TextInputProps> = (props) => {
  const [, inputProps] = splitProps(props, ['value', 'label', 'error'])
  const errorName = (fieldName: string) => `${fieldName}-error`

  return (
    <>
      <label for={props.name}>{props.label}</label>
      <input
        {...inputProps}
        id={props.name}
        value={props.value || ''}
        aria-invalid={!!props.error || undefined}
        aria-errormessage={errorName(props.name)}
      />
      <Show when={props.error}>
        <small id={errorName(props.name)} class={styles.error}>
          {props.error}
        </small>
      </Show>
    </>
  )
}

export default Input
