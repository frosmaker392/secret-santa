import { Field, Form, createForm } from '@modular-forms/solid'
import { render } from '@solidjs/testing-library'
import { Component, ComponentProps } from 'solid-js'
import { describe, expect, it } from 'vitest'

import { TextInput } from 'components/atoms'

import TextField from './TextField'

type TestForm = {
  test: string
}

interface TestComponentProps {
  type: ComponentProps<typeof TextInput>['type']
  label: string
}

const TestComponent: Component<TestComponentProps> = (props) => {
  const form = createForm<TestForm>()

  return (
    <Form of={form} onSubmit={() => {}}>
      <Field of={form} name="test">
        {(field) => (
          <TextField type={props.type} field={field} label={props.label} />
        )}
      </Field>
    </Form>
  )
}

describe('TextField component', () => {
  it('should render correctly', () => {
    const type = 'text'
    const labelText = 'test-label'

    const { getByTestId } = render(() => (
      <TestComponent type={type} label={labelText} />
    ))

    const label = getByTestId('text-field-label')
    const input = getByTestId('text-input')

    expect(label).toHaveTextContent(labelText)
    expect(input).toHaveAttribute('type', type)
  })
})
