import { Component, ComponentProps, ParentProps } from 'solid-js'
import Navbar from '../organisms/Navbar'
import { AppStore } from '../../stores/app-store'

interface AppTemplateProps extends ParentProps {
  state: AppStore
  onClickLogout: () => void
}

const getNavbarProps = (
  state: AppStore,
  onClickLogout: () => void
): ComponentProps<typeof Navbar> => {
  if (state.hideNavbar)
    return {
      state: 'hidden',
    }

  if (state.loggedInUsername === undefined)
    return {
      state: 'logged-out',
    }

  return {
    state: 'logged-in',
    username: state.loggedInUsername,
    onClickLogout,
  }
}

const AppTemplate: Component<AppTemplateProps> = (props) => (
  <>
    <Navbar {...getNavbarProps(props.state, props.onClickLogout)} />
    <main class="container">{props.children}</main>
  </>
)

export default AppTemplate
