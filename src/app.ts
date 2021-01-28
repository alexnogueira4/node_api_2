import "../config/env"
import Database from '../config/database'
import server from '../server/server'
import users from './api/users'
import express from "express";
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'

const database = Database.connect()
const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.start(app, users, database, () => { console.log('Started users') })
app.listen(process.env.PORT, () => { console.log('Running on port: ', process.env.PORT) })

export default app