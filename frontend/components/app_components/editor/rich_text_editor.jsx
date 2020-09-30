import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./editor_toolbar";
// import {MyToolbar, formats, modules} from './my_toolbar';


export default class RichTextEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {body: "", title: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field){
        return e => this.setState({[field]: e.target.value})
    }

    render(){
        return(
            <div className="editor">
                <EditorToolbar />
                {/* <MyToolbar/> */}
                <h1>Hellor there</h1>
                <ReactQuill value={this.state.body}
                            onChange={this.handleChange('body')}
                            // theme="snow"
                            modules={modules}
                            formats={formats}
                            />
                
            </div>
        )
    }
}