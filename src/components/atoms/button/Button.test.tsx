import { fireEvent, render } from '@solidjs/testing-library'
import { describe, expect, it, vitest } from 'vitest'

import Button from './Button'

describe('Button component', () => {
  it('should be a button element with working props', () => {
    const onClick = vitest.fn()
    const textContent = 'Test text content'

    const { getByRole } = render(() => (
      <Button onClick={onClick}>{textContent}</Button>
    ))

    const button = getByRole('button')

    expect(button).toHaveTextContent(textContent)

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })
})
