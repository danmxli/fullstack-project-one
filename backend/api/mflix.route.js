import express from "express"
import mflixCtrl from "./mflix.controller.js"

const router = express.Router()

// demonstration route
// create .apiGetMflix
router.route("/").get(mflixCtrl.apiGetMflix)

export default router