import { Field, Form, createForm } from '@modular-forms/solid'
import { render } from '@solidjs/testing-library'
import userEvent from '@testing-library/user-event'
import { Component } from 'solid-js'
import { describe, expect, it } from 'vitest'

import PasswordField from './PasswordField'

type TestForm = {
  password: string
}

interface TestComponentProps {
  label: string
}

const TestComponent: Component<TestComponentProps> = (props) => {
  const form = createForm<TestForm>()

  return (
    <Form of={form} onSubmit={() => {}}>
      <Field of={form} name="password">
        {(field) => <PasswordField field={field} label={props.label} />}
      </Field>
    </Form>
  )
}

describe('PasswordField component', () => {
  it('should render correctly', () => {
    const labelText = 'Password'

    const { getByTestId } = render(() => <TestComponent label={labelText} />)

    const label = getByTestId('password-field-label')
    const input = getByTestId('text-input')
    const passwordRevealIcon = getByTestId('password-reveal-icon')

    expect(label).toHaveTextContent(labelText)
    expect(input).toHaveAttribute('type', 'password')
    expect(input).toHaveAttribute('aria-errormessage', 'password-error')
    expect(passwordRevealIcon).toHaveClass('fa-eye')
  })

  it('should toggle between "password" and "text" type when icon is clicked', async () => {
    const user = userEvent.setup()

    const { getByTestId } = render(() => <TestComponent label="password" />)

    const input = getByTestId('text-input')
    const passwordRevealIcon = getByTestId('password-reveal-icon')

    await user.click(passwordRevealIcon)

    expect(input).toHaveAttribute('type', 'text')
    expect(passwordRevealIcon).toHaveClass('fa-eye-slash')

    await user.click(passwordRevealIcon)

    expect(input).toHaveAttribute('type', 'password')
    expect(passwordRevealIcon).toHaveClass('fa-eye')
  })
})
