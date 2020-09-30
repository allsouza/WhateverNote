import React from "react";
import ReactQuill from "react-quill";
import {MyToolbar, formats, modules} from './editor_toolbar';


export default class RichTextEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {body: "", title: ""};
        this.handleBodyChange = this.handleBodyChange.bind(this);
    }

    handleBodyChange(body){
        console.log(this.state.body);
        this.setState({body})
    }

    render(){
        return(
            <div className="editor">
                {/* <EditorToolbar /> */}
                <MyToolbar/>
                <h1>Hellor there</h1>
                <ReactQuill value={this.state.body}
                            onChange={this.handleBodyChange}
                            theme="snow"
                            modules={modules}
                            formats={formats}
                />
                
            </div>
        )
    }
}