import { Component, ComponentProps, ParentProps } from 'solid-js'
import Navbar from '../organisms/Navbar'

type AppTemplateProps = ParentProps & ComponentProps<typeof Navbar>

const AppTemplate: Component<AppTemplateProps> = (props) => (
  <>
    <Navbar {...props} />
    <main class="container">{props.children}</main>
  </>
)

export default AppTemplate
