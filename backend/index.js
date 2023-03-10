import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import mflixDAO from "./dao/mflixDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 4000

MongoClient.connect(
    process.env.MFLIXREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        // start webserver
        await mflixDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })