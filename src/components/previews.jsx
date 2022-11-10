import React, { Component } from 'react';
import { marked } from 'marked';
import placeholder from './constante';
marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();
export default class previews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: placeholder,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            markdown: e.target.value,
        });
    }
    render() {
        return <div>preview</div>;
    }
}
