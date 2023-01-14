import express from "express"
import cors from "cors"
// import file 
import mflix from "./api/mflix.route.js"

// for mflix web framework
const app = express()

// apply middleware, enable read json
app.use(cors())
app.use(express.json())

// make url and mflix file first
app.use("/api/v1/mflix", mflix)
app.use("*", (req, res) => res.status(404).json({ error: "route not found" }))

// export as module
export default app 