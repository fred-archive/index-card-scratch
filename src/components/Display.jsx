import React from 'react'
import Card from './Card'

export default class Display extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h1>Display.jsx</h1>
                <Card />
            </div>
        )
    }
}