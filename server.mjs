import express from 'express'
import morgan from "morgan"
import debug from "debug"
import chalk from "chalk"
import ejs from "ejs"
import signupRouter from './src/routers/auth.mjs'
import passport from "passport"
import passportConfig from './src/config/passport.mjs'
import session from "express-session"

const PORT = process.env.PORT || 5000

const log = debug('app')

const app = express()

app.use(morgan('tiny'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(session({secret: "habitProject"}))

passportConfig(app)

app.use('/signup', signupRouter)

app.set("views", "./src/views")
app.set('view engine', "ejs")

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    log(`Server listening on ${chalk.green(PORT)}`)
})