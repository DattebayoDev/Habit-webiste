import express from 'express'
import morgan from "morgan"
import debug from "debug"
import chalk from "chalk"


const PORT = process.env.PORT || 5000


const log = debug('app')

const app = express()

app.use(morgan('tiny'))


app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    log(`Server listening on ${chalk.green(PORT)}`)
})