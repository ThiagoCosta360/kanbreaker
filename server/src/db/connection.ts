import * as mongoose from "mongoose"

const MONGO_USERNAME = "thiago"
const MONGO_PASSWORD = "meunome"
const MONGO_HOSTNAME = "127.0.0.1"
const MONGO_PORT = "27017"
const MONGO_DB = "kanbreaker"

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

mongoose.connect(url, { useNewUrlParser: true })
