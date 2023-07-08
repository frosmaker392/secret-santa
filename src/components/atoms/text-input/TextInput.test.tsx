import { fireEvent, render } from '@solidjs/testing-library'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vitest } from 'vitest'

import TextInput from './TextInput'

describe('TextInput component', () => {
  it('should be an input with correct aria attributes and working callbacks', async () => {
    const user = userEvent.setup()

    const name = 'test-name'
    const errorId = 'test-id'

    const onInput = vitest.fn()
    const onChange = vitest.fn()
    const onBlur = vitest.fn()

    const { getByTestId } = render(() => (
      <TextInput
        ref={() => {}}
        type="text"
        name={name}
        isError={true}
        errorId={errorId}
        onInput={onInput}
        onChange={onChange}
        onBlur={onBlur}
      />
    ))

    const textInput = getByTestId('text-input')

    expect(textInput.tagName).toBe('INPUT')
    expect(textInput).toHaveAttribute('name', name)
    expect(textInput).toHaveAttribute('type', 'text')
    expect(textInput).toHaveAttribute('aria-invalid', 'true')
    expect(textInput).toHaveAttribute('aria-errormessage', errorId)

    await user.type(textInput, 'text')

    expect(onInput).toHaveBeenCalled()

    fireEvent.blur(textInput)

    expect(onChange).toHaveBeenCalled()
    expect(onBlur).toHaveBeenCalled()
  })

  it('should not have aria-invalid as attribute when isError is false', () => {
    const { getByRole } = render(() => (
      <TextInput
        ref={() => {}}
        type="text"
        name="test-name"
        isError={false}
        errorId={'test-error-id'}
        onInput={() => {}}
        onChange={() => {}}
        onBlur={() => {}}
      />
    ))

    const textInput = getByRole('textbox')

    expect(textInput.getAttribute('aria-invalid')).toBeNull()
  })
})
