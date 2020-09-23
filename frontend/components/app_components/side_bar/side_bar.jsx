import React from 'react';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this._displayUserDropdown = this._displayUserDropdown.bind(this);
        this._hideUserDropdown = this._hideUserDropdown.bind(this);
        this._select = this._select.bind(this);
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
    
    _redirect(id){
        debugger
        switch (id) {
            case "test":
                this.props.history.push('/app/test')
                break;
        
            default:
                this.props.history.push('/app')
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
                <ul className="user-dropdown hidden">
                    <h3>ACCOUNT</h3>
                    <li>
                        <div id="user-info">
                            <i className="fas fa-check"></i>
                            <img src={window[user.user_icon]} alt=""/>
                            <div>
                                <h3>{`${user.first_name} ${user.last_name}`}</h3>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </li>
                    <li id="logout" onClick={this.props.logout}><p>{`Sign out ${user.first_name} ${user.last_name}`}</p></li>
                </ul>
                
                <button><i className="fas fa-plus"></i>New Note</button>

                <ul className="actions">
                    <li onClick={this._select} id="allNotes" className="action selected"><i className="fas fa-sticky-note"></i>All Notes</li>
                    <li onClick={this._select} id="test" className="action"><i className="fas fa-sticky-note"></i>another test</li>
                </ul>
            </div>
        )
    }
}