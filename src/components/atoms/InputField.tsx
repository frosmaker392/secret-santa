import { Component, JSX } from 'solid-js'

type InputProps = {
  fieldName: string
} & JSX.InputHTMLAttributes<HTMLInputElement>

const InputField: Component<InputProps> = (props) => {
  return (
    <>
      <label for={props.name} hidden>
        {props.fieldName}
      </label>
      <input {...props} placeholder={props.fieldName} />
    </>
  )
}

export default InputField
