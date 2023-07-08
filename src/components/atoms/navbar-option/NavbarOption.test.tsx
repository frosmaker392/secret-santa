import { render, within } from '@solidjs/testing-library'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vitest } from 'vitest'
import NavbarOption from './NavbarOption'
import { Router } from '@solidjs/router'
import { ColorType } from 'types/design'

describe('NavbarOption component', () => {
  it('should render an anchor with the correct href inside an li element', async () => {
    const user = userEvent.setup()

    const link = '/test-link'
    const textContent = 'Test text content'

    const onClick = vitest.fn()

    const { getByTestId } = render(() => (
      <Router>
        <NavbarOption link={link} onClick={onClick}>
          {textContent}
        </NavbarOption>
      </Router>
    ))

    const navbarOption = getByTestId('navbar-option')
    const anchor = within(navbarOption).getByRole('link')

    expect(navbarOption.tagName).toBe('LI')
    expect(anchor).toHaveAttribute('href', link)
    expect(anchor).toHaveClass('primary')
    expect(anchor).toHaveTextContent(textContent)

    await user.click(navbarOption)

    expect(onClick).toHaveBeenCalled()
  })

  it('should have a different class based on its type', () => {
    const type: ColorType = 'secondary'

    const { getByRole } = render(() => (
      <Router>
        <NavbarOption link="/test-link" type={type} />
      </Router>
    ))

    const anchor = getByRole('link')

    expect(anchor).toHaveClass(type)
  })
})
