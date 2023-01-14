// create variable store reference to db
let mflix

export default class mflixDAO {
    static async injectDB(conn) {
        // reference condition
        if (mflix) {
            return
        }
        try {
            // data from movies collection
            mflix = await conn.db(process.env.MFLIXREVIEWS_NS).collection("movies")
        }
        catch (e) {
            // console error message
            console.error(
                `Unable to establish connection handle in DAO: " ${e}`,
            )
        }
    }

    // get list of all mflix movie database 1-20 of many
    static async getMflix({
        filters = null,
        page = 0,
        mflixPerPage = 20,
    } = {}) {
        // query the database for 3 values, text search //TEST
        let query
        if (filters) {
            if ("title" in filters) {
                query = { $text: { $search: filters["title"] } }
            }
            else if ("title" in filters) {
                query = { "title": { $eq: filters["title"] } }
            }
            else if ("rated" in filters) {
                query = { "filters": { $eq: filters["rated"] } }
            }
        }

        // cursor return results
        let cursor
        try {
            cursor = await mflix
                .find(query)
        }
        catch (e) {
            console.error(`unable to find command, ${e}`)
            return { mflixList: [], totalNumMflix: 0 }
        }

        // limit result display
        const displayCursor = cursor.limit(mflixPerPage).skip
            (mflixPerPage * page)

        // set mflixList to array, count documents in query
        try {
            const mflixList = await displayCursor.toArray()
            const totalNumMflix = await mflix.countDocuments(query)

            return { mflixList, totalNumMflix }
        }
        catch (e) {
            console.error(`unable to convert documents, ${e}`)
            return { mflixList: [], totalNumMflix: 0 }
        }
    }


}