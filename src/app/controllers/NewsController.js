// Controller <=> function handler

class NewsController {

    // [GET] /news
    index(req, res) {
            res.render('news');
        }
        // [GET] /news/:slug
    show(req, res) {
        res.send('Hello NodeJS');
    }

}

module.exports = new NewsController;