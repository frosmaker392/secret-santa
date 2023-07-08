import { render } from '@solidjs/testing-library'
import { describe, expect, it } from 'vitest'
import NavFragmentLoggedOut from './NavFragmentLoggedOut'
import { Router } from '@solidjs/router'

describe('NavFragmentLoggedOut component', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(() => (
      <Router>
        <NavFragmentLoggedOut />
      </Router>
    ))

    expect(queryByTestId('navbar-option')).toBeInTheDocument()
  })
})
