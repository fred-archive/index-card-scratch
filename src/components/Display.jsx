import React from 'react'
import axios from 'axios'
import Card from './Card'

export default class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            cards: [],
            id: ''
        }
    }

    getCard(){
        // console.log(res.data)
        axios
        .get('/api/cards/')
        .then(res =>
            this.setState({
                cards : res.data
            }))
    }

    render() {
        return (
            <section>
                <h1>Display.jsx</h1>
                
                <button
                onClick={()=>this.getCard()}
                >GET CARD</button>

                <div className='display'>


                    {/* MAP */}
                    {this.state.cards.map(el =>

                        <Card 
                        id = {el}
                        />
                    )}

                </div>



            </section>
        )
    }
}