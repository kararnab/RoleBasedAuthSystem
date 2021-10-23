const books = [
    {
        isbn: 87462110,
        bookName: 'Let Us D',
        author: 'Anonymous'
    },
    {
        isbn: 87472110,
        bookName: 'Garden of Angel',
        author: 'Ryan'
    }
]

exports.book_list = function (req, res) {
    res.json({ data: books });
};

exports.book_by_id = function (req, res) {
    res.send('NOT IMPLEMENTED: Book by id');
};

exports.book_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete');
};

exports.book_add = function (req, res) {
    res.send('NOT IMPLEMENTED: Book add');
};