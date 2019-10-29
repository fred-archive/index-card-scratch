import React from 'react'

export default class Card extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    render(){
        const {id} = this.props
        return(
            <div className="card">
                <h2>{id}</h2>
            </div>
        )
    }
}