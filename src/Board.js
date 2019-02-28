import React, { Component } from 'react'
import Square from './Square';


export default class Board extends Component{
    state = {
        cellValue: Array(9).fill(''),
        currentPlayer : 'X'
    }

    renderCell = (i) => {
        return <Square value={this.state.cellValue[i]} clickHandler={this.buttonClickHandler(i)}/>
    }
    
    buttonClickHandler = (i) => {
        if(this.calculateWinner() || this.state.cellValue[i]){
            return
        }
        const updatedCells = this.state.cellValue
        const player = this.state.currentPlayer==='X' ? 'O' :'X' 
        updatedCells[i] = player
        this.setState({cellValue: updatedCells,currentPlayer:player})
        let winner = this.calculateWinner();
        if(winner){
            console.log(`Player ${winner} won`)
            return <div>{`Player ${winner} won`}</div>
        }

    }

    calculateWinner = () => {
        console.log('Inside Calculte Winner')
        const rows = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let i=0;i<8;i++){
            console.log('Inside for')
            let [a,b,c] = rows[i]
            console.log(this.state.cellValue[a],this.state.cellValue[b],this.state.cellValue[c])
            if(this.state.cellValue[a] && this.state.cellValue[a]===this.state.cellValue[b] && this.state.cellValue[a]===this.state.cellValue[c]){
                return this.state.cellValue[a]
            }
        }
    }
    
    render(){
        return(
            <div>
                <div style={{display:'flex'}}>
                    <Square value={this.state.cellValue[0]} buttonClickHandler={()=>this.buttonClickHandler(0)}/>
                    <Square value={this.state.cellValue[1]} buttonClickHandler={()=>this.buttonClickHandler(1)}/>
                    <Square value={this.state.cellValue[2]} buttonClickHandler={()=>this.buttonClickHandler(2)}/>
                </div>
                <div style={{display:'flex'}}>
                    <Square value={this.state.cellValue[3]} buttonClickHandler={()=>this.buttonClickHandler(3)}/>
                    <Square value={this.state.cellValue[4]} buttonClickHandler={()=>this.buttonClickHandler(4)}/>
                    <Square value={this.state.cellValue[5]} buttonClickHandler={()=>this.buttonClickHandler(5)}/>
                </div>
                <div style={{display:'flex'}}>
                    <Square value={this.state.cellValue[6]} buttonClickHandler={()=>this.buttonClickHandler(6)}/>
                    <Square value={this.state.cellValue[7]} buttonClickHandler={()=>this.buttonClickHandler(7)}/>
                    <Square value={this.state.cellValue[8]} buttonClickHandler={()=>this.buttonClickHandler(8)}/>
                </div>
            </div>
        );
    }
}