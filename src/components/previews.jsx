import React, { Component } from 'react';
import placeholder from './constante';
import Toolbar from './toolbar';
import Editor from './editor';
import Preview from './preview';

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
        return (
            <div>
                <h1>React Markdown Preview</h1>
                <div>
                    <div>
                        <Toolbar text="Editor" />
                        <Editor
                            markdown={this.state.markdown}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Toolbar text="Preview" />
                        <Preview markdown={this.state.markdown} />
                    </div>
                </div>
            </div>
        );
    }
}
