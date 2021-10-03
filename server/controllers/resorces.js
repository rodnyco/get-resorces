
var getDataService = require('../service/getDataService');

exports.all = function (req, res) {
    let resorces = {
        books: [],
        videos: [],
        images: []
    };

    getDataService.find(req.body.topic, req.body.text, 'книги').then((data) => {
        resorces.books = data;
    }).then(() => {
        getDataService.find(req.body.topic, req.body.text, 'видео').then((data) => {
            resorces.videos = data;
        }).then(() => {
            getDataService.find(req.body.topic, req.body.text, 'изображения').then((data) => {
                resorces.images = data;
                res.json(resorces);
            })
        })
    }) 
}