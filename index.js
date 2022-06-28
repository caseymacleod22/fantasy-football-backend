const app = require ('express')
const PORT = 8000

app.listen(
    PORT,
    () => console.log(`api is live on http://localhost:${PORT}`)
)