import React from 'react';

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this._displayUserDropdown = this._displayUserDropdown.bind(this);
        this._hideUserDropdown = this._hideUserDropdown.bind(this);
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
            </div>
        )
    }
}