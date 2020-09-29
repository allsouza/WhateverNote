import React from 'react';
import Actions from './actions';
import UserDropdown from './user-dropdown';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {expanded: null}
        this._displayUserDropdown = this._displayUserDropdown.bind(this);
        this._hideUserDropdown = this._hideUserDropdown.bind(this);
        this._select = this._select.bind(this);
        this._createNote = this._createNote.bind(this);
        this.dropdown = "";
    }

    componentDidMount(){
        this.dropdown = document.getElementsByClassName('user-dropdown')[0];
    }

    _displayUserDropdown(){
        this.dropdown.classList.remove('hidden');
        document.getElementsByClassName('user')[0].removeEventListener('click', this._displayUserDropdown);
        document.addEventListener('click', this._hideUserDropdown);
    }

    _hideUserDropdown(){
        this.dropdown.classList.add('hidden');
        document.removeEventListener('click', this._hideUserDropdown);
    }

    _select(e){
        const actions = document.getElementsByClassName('action');
        Array.from(actions).forEach(action=>{action.classList.remove('selected')});
        e.currentTarget.classList.add('selected');
        this._redirect(e.currentTarget.id)
    }

    _createNote(){
        let notebook_id, route;
        let path = this.props.location.pathname.split('/');
        if(path[2] === 'notebooks'){
            notebook_id = path[3];
            route = `/app/notebooks/${notebook_id}/notes`;
        }
        else{
            notebook_id = this.props.user.default_notebook;
            route = `/app/notes`
        }
        this.props.createNote({title: "Untitled", body: "", notebook_id: notebook_id, author_id:this.props.user.id}).then(payload=>{
            this.props.history.push(`${route}/${payload.note.id}`)
        })
    }
    
    _redirect(component){
        switch (component) {
            case "NotebooksIndex":
                this.props.history.push('/app/notebooks')
                break;
        
            default:
                if(this.props.location.pathname.split("/")[2] !== 'notes') this.props.history.push(`/app/notes/`)
                break;
        }
    }

    _expand(target){
        switch (target) {
            case "notebooks":
                if (this.state.expanded !== "notebooks"){
                    this.setState({expanded: "notebooks"})
                    break;
                }
            default:
                this.setState({expanded:null})
                break;
        }
    }

    render(){
        const {user} = this.props;
        return(
            <div className="side-bar">
                <div onClick={this._displayUserDropdown} className='user'>
                    <img src={window[user.user_icon]} alt=""/>
                    <p>{`${user.first_name} ${user.last_name}`}<i className="fas fa-angle-down"></i></p>
                </div>

                <UserDropdown user={user} logout={this.props.logout}/>
                
                <button onClick={this._createNote}><i className="fas fa-plus"></i>New Note</button>

                <Actions select={this._select} expand={this._expand.bind(this)} expanded={this.state.expanded}/>
            </div>
        )
    }
}