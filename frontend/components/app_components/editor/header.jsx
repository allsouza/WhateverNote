import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {options: false}
        this._handleOptionsBlur = this._handleOptionsBlur.bind(this);
        this._handleOptionsClick = this._handleOptionsClick.bind(this);
    }

    sizeToggle(){
        Array.from(document.getElementsByClassName('size-toggle')).forEach(ele=>{
            ele.classList.toggle('show');
        })
        const toMod = [document.getElementsByClassName('side-bar')[0], document.getElementsByClassName('notes-index')[0]];
        toMod.forEach(ele=>{
            ele.classList.toggle('minimized');
        })
    }

    _handleOptionsClick(){
        this.setState({options: !this.state.options})
    }

    _handleOptionsBlur(){
        setTimeout(()=>this.setState({options: false}), 250);
    }

    render(){
        return(
            <div className="header">
            <div id='first-header'>
                <div className="left">
                    <button 
                        className="size-toggle show"
                        onClick={this.sizeToggle}
                        ><i className="fas fa-expand-alt"></i>

                        <div className='center description'>
                        <div className="arrow"></div>
                        Expand editor</div>
                    </button>
                    <button 
                        onClick={this.sizeToggle}
                        className="size-toggle"
                        ><i className="fas fa-compress-alt"></i>

                        <div className='left description'>
                        <div className="arrow"></div>
                        Collapse editor</div>
                    </button>
                </div>
                <div className="right">
                    <button 
                        id="note-options" 
                        onClick={this._handleOptionsClick}
                        onBlur={this._handleOptionsBlur}
                        >
                        <i className="fas fa-ellipsis-h"></i>
                        <div className='right description'>
                        <div className="arrow"></div>
                        More actions</div>

                    </button>
                    {this.state.options ? (
                        <ul id="options-dropdown" >
                            <li><ul><li
                                onClick={()=>this.props.openModal('noteInfo')}
                                >Note info</li></ul></li>
                            <li><ul><li onClick={()=>{
                                this.props.deleteNote();
                                this._handleOptionsBlur();
                                }}>Delete note</li></ul></li>
                        </ul>
                    ) : null}
                </div>
                
            </div>
            <div id="toolbar-field">
                <p className="display active">Last edited on {this.props.formatDate()}</p>
                <nav className="toolbar">
                    {/* Rich text editing toolbar goes here */}
                    <img src={window.editing} alt=""/>
                </nav>
            </div>
        </div>
        )
    }
}

