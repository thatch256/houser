module.exports = {
    getHouses(req, res) {
       const db = req.app.get('db')
       db.get_houses()
       .then(houses => res.status(200).send(houses))
       .catch(err => res.status(500).send(err)) 
    },
    addHouse(req, res) {
        const db = req.app.get('db')
        let {name, address, city, state, zip} = req.body
        db.add_house([name, address, city, state, zip])
        .then(dbRes => res.sendStatus(200))
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    deleteHouse(req, res) {
        const db = req.app.get('db')
        let {id} = req.params
        db.delete_house(id)
        .then( () => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}