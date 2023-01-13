import { Component, ParentProps } from 'solid-js'
import Navbar from '../organisms/Navbar'

interface AppTemplateProps extends ParentProps {
  loggedIn: boolean
  onLogout: () => void
}

const AppTemplate: Component<AppTemplateProps> = (props) => (
  <>
    <Navbar loggedIn={props.loggedIn} onLogout={() => props.onLogout()} />
    <main class="container">{props.children}</main>
  </>
)

export default AppTemplate
