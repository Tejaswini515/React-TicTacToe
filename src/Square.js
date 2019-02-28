import React, { Component } from 'react'


export default class Square extends Component{
    render(){
        return(
            <div>
                <button style={{width:"50px",height:"50px"}}
                        onClick={this.props.buttonClickHandler}>
                        {this.props.value}
                </button>
            </div>
        );
    }
}