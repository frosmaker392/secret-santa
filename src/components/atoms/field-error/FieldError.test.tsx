import { render } from '@solidjs/testing-library'
import { describe, expect, it } from 'vitest'

import FieldError from './FieldError'

describe('FieldError component', () => {
  it('should have text content and errorId as id', () => {
    const errorId = 'error-id'
    const errorText = 'Error text'

    const { getByTestId } = render(() => (
      <FieldError errorId={errorId}>{errorText}</FieldError>
    ))

    const fieldError = getByTestId('field-error')

    expect(fieldError).toHaveTextContent(errorText)
    expect(fieldError).toHaveAttribute('id', errorId)
  })
})
