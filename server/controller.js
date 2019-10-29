const cards = []
let id = 1

module.exports = {
    getCard: (req, res) => {
        cards.push(id)
        res.status(200).send(cards)
        id ++
    }
}