import mflixDAO from "../dao/mflixDAO.js"

export default class RestaurantsController {
    static async apiGetMflix(req, res, next) {
        // query variable, convert to int
        const mflixPerPage = req.query.mflixPerPage ? parseInt(req.query.mflixPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        // query variable for movie
        let filters = {}
        if (req.query.title) {
            filters.title = req.query.title
        } else if (req.query.plot) {
            filters.plot = req.query.plot
        } else if (req.query.rated) {
            filters.rated = req.query.rated
        }

        // pass in variables from getMflix
        const { mflixList, totalNumMflix } = await mflixDAO.getMflix({
            filters,
            page,
            mflixPerPage,
        })

        // create response
        let response = {
            mflix: mflixList,
            page: page,
            filters: filters,
            entries_per_page: mflixPerPage,
            total_results: totalNumMflix,
        }
        res.json(response)
    }
    static async apiGetMflixById(req, res, next) {
        try {
            let id = req.params.id || {}
            let restaurant = await mflixDAO.getMflixByID(id)
            if (!mflix) {
                res.status(404).json({ error: "Not found" })
                return
            }
            res.json(mflix)
        } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }

    static async apiGetMflixTitle(req, res, next) {
        try {
            let titles = await mflixDAO.getTitle()
            res.json(titles)
        } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }
}