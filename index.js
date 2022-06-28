const app = require ('express')()
const PORT = 8000

app.listen(
    PORT,
    () => console.log(`api is live on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'v-neck',
        size: 'large'
    })
})

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params
    const { logo } = req.body

    if (!logo) {
        res.status(418).send({message: "We need a logo!"})
    }
    res.send({
        tshirt: `v-neck with your ${logo} and ID of ${id}`
    })
})