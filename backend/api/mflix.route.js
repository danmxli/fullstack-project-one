import express from "express"
import mflixCtrl from "./mflix.controller.js"

const router = express.Router()

// demonstration route
router.route("/").get(mflixCtrl.apiGetMflix)
router.route("/title").get(mflixCtrl.apiGetMflixTitle)

export default router