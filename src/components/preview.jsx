import React from 'react';
import marked from 'marked';

export default function preview(props) {
    marked.setOptions({
        breaks: true,
    });

    const renderer = new marked.Renderer();
    return (
        <div
            id="previewer"
            dangerouslySetInnerHTML={{
                __html: marked(props.markdown, { renderer: renderer }),
            }}
        ></div>
    );
}
