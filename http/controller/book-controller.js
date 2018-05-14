class BookController {

    createBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.add(request.book).then((book) => {
            request.book.setId(book);
            response.status(200).send(request.book);
            next();
        }).catch(next);
    }

    deleteBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.remove(request.params.id).then(function () {
            response.status(200).json({message: 'Success'});
            next();
        });
    }

    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then(results => {
                response.status(200).send(results.map(result => result.toJson()));
                next();
            })
            .catch(next)
    }

    editBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.edit(request.book).then(function () {
            response.status(200).json(request.book);
            next();
        });
    }

    //controller service React

    listPublisher(req, res) {
        let PublisherProvider = req.app.get('publisher.provider');
        PublisherProvider.providerAll().then((results) => {
            res.send(results);
        })
    }

    showEditBook(request, response, next) {
        let Publisher = request.app.get('publisher.provider').providerAll();
        let book = request.app.get('book.searcher').search(request.condition);
        Promise.all([Publisher, book])
            .then(results => {
                console.log(results[0]);//publisher
                console.log(results[1]);//book
                response.status(200).send();
                next();
            })
            .catch(next)
    }

}

module.exports = BookController;
