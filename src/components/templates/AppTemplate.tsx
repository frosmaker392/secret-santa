import { Component, ParentProps } from 'solid-js'
import Navbar from '../organisms/Navbar'

interface AppTemplateProps extends ParentProps {
  loggedIn: boolean
}

const AppTemplate: Component<AppTemplateProps> = (props) => (
  <>
    <Navbar loggedIn={props.loggedIn} />
    <main class="container">{props.children}</main>
  </>
)

export default AppTemplate
