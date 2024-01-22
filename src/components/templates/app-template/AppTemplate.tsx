import { Component } from 'solid-js';

import { AppTemplateProps } from './AppTemplate.types';

const AppTemplate: Component<AppTemplateProps> = (props) => (
    <>
        {props.navbar}
        <main class="container">{props.content}</main>
    </>
);

export default AppTemplate;
