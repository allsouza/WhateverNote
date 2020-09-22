import React from 'react';

export default class Sidebar extends React.Component{
    render(){
        const {user} = this.props;
        const iconPath = `window.${user.user_icon}`
        return(
            <div className="side-bar">
                <div className='user-dropdown'>
                    <img src={iconPath} alt=""/>
                    <p>{`${user.first_name} ${user.last_name}`}</p>
                </div>
            </div>
        )
    }
}