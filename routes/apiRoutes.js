const axios = require("axios");
const router = require("express").Router();
const booksController = require("../controllers/booksController");


router.get("/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q + "&key=AIzaSyB2DmDMvrzr6RVnFGr6a2qkYkO1r0Zdl0I")
    .then(results => res.json(results.data.items)
    )
    .catch(err => res.status(422).json(err));
});


router.route("/saved/books")
  .get(booksController.findAll)
  .post(booksController.create);


router.route("/saved/books/:id")
  .delete(booksController.remove);

module.exports = router;
