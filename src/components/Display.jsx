import React from 'react'
import Card from './Card'

export default class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            id: ''
        }
    }
    render() {
        return (
            <section>
                <h1>Display.jsx</h1>

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