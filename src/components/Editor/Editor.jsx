import React,{useState} from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import "./editor.css"

export const Editor = () => {
    const { quill, quillRef } = useQuill();
    const [value, setValue] = useState();

    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                setValue(quillRef.current.firstChild.innerHTML)
            });
        }
    }, [quill]);

    return (
        <div className="editor-content" style={{}}>
            <div ref={quillRef} />
        </div>
    )
}
