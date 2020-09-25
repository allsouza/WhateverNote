import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="app-footer">
                <div className="left-footer"></div>
                <div className="right-footer">
                    <p>{this.props.status}</p>
                </div>
            </div>
        )
    }
}