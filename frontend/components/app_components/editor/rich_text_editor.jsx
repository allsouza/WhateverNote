import React from "react";
import ReactQuill from "react-quill";
import {MyToolbar, formats, modules} from './editor_toolbar';
import HeaderContainer from "./header_container";
import Footer from './footer'


export default class RichTextEditor extends React.Component{
    constructor(props){
        super(props);
        this.state= Object.assign({}, this.props.note,{
            noteIds: props.noteIds,
            status: "All changes saved",
        })
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toolbarToggle = this.toolbarToggle.bind(this);
    }

    handleBodyChange(body){
        this.setState({body})
    }

    handleChange(e){
        this.setState({title: e.target.value})
    }

    toolbarToggle(){
        // debugger
        const eles = document.getElementsByClassName('toolbar-field')[0].childNodes;
        eles.forEach(ele=>{
            ele.classList.toggle('active');
        })
    }

    render(){
        return(
            <div className="rich-text-editor">
                    <HeaderContainer note={{author_id: 5,
                                            body: "Alright this looks pretty good to me",
                                            created_at: "2020-09-29T17:11:54.300Z",
                                            id: 31,
                                            notebook_id: 13,
                                            title: "Cool cool cool",
                                            updated_at: "2020-09-29T17:14:43.923Z"}}/>
                <div className='toolbar-field'>
                    <p className="display active">Last edited on somedate</p>
                    <MyToolbar />
                </div>
                <form>
                    <input type="text" className="title" value={this.state.title} onChange={this.handleChange}/>
                    <ReactQuill value={this.state.body}
                                onChange={this.handleBodyChange}
                                onFocus={this.toolbarToggle}
                                onBlur={this.toolbarToggle}
                                theme="snow"
                                modules={modules}
                                formats={formats}
                    />
                </form>
                <Footer status={this.state.status} />
            </div>
        )
    }
}