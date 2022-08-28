import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw } from 'draft-js';

import normal from './normal.png';
import mosaic from './mosaic.png';
import sample from './sample.json';

import './index.scss';

const sampleEditorContent = EditorState.createWithContent(convertFromRaw(sample));

function Poster({
    type = 'normal',
    readonly = true,
}) {
    return (
        <div className="Poster">
            <div className="Editor">
                <Editor
                    editorClassName='EditArea'
                    toolbarHidden={readonly}
                    readOnly={readonly}
                    defaultEditorState={sampleEditorContent}
                />
            </div>
            <img
                src={type === "mosaic" ? mosaic : normal}
                alt=""
            />
        </div>
    );
}

export default Poster;