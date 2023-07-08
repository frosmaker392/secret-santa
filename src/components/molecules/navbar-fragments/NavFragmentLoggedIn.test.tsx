import { Router } from '@solidjs/router'
import { render } from '@solidjs/testing-library'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vitest } from 'vitest'

import NavFragmentLoggedIn from './NavFragmentLoggedIn'

describe('NavFragmentLoggedIn component', () => {
  it('should render without errors', async () => {
    const user = userEvent.setup()

    const username = 'test-username'
    const onClickLogout = vitest.fn()

    const { queryAllByTestId } = render(() => (
      <Router>
        <NavFragmentLoggedIn
          username={username}
          onClickLogout={onClickLogout}
        />
      </Router>
    ))

    const navbarOptions = queryAllByTestId('navbar-option')

    expect(navbarOptions).toHaveLength(3)

    const profileOption = navbarOptions[0]
    const logoutOption = navbarOptions[2]

    expect(profileOption).toHaveTextContent(`@${username}`)

    await user.click(logoutOption)

    expect(onClickLogout).toHaveBeenCalled()
  })
})
