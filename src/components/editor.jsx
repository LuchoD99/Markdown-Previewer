import React from 'react';

export default function editor(props) {
    return (
        <textarea
            id="editor"
            value={props.markdown}
            onChange={props.onChange}
            type="text"
        />
    );
}
