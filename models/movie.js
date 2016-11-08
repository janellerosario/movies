const db = require('../lib/dbConnect');

// Your middleware MUST allow limit and offset to be sent
// via query parameters to the db for filtering

// default limit
const limit = 10;
// default offset
const offset = 0;

function getAllMovies(req, res, next) {
  console.log('movies incoming!!!')

// implement get all movies
  db.any('SELECT * FROM movies;')
    .then((movies) => {
      console.log('movies incoming!')
      res.rows = movies;
      next();
    })
    .catch(error => (error));
};


function getMovie(req, res, next) {
// implement get single movie
var movieID = parseInt(req.params.id);
db.one('SELECT * FROM movies WHERE id = $1;', movieID)
  .then((getAmovie) => {
    res.rows = getAmovie;
    next();
  })
  .catch(error => (error));
};

function updateMovie(req, res, next) {

  console.log(`id = ${req.params.id} || title = ${req.params.title}`);
// implement update
db.none(`UPDATE movies SET title=$/title/ WHERE id=$/id/`, req.params)
  .then((data) => {
  res.status(204).send();
})
  .catch(error => next(error));
};

function deleteMovie(req, res, next) {
// implement delete
    movie = Number.parseInt(req.params.id);
    db.none(`
      DELETE FROM movies
      WHERE id = $1;
      `, [movie])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Deleted movie'
        });
      })
    .catch(function (err) {
      return next(err);
    });
}

// BONUS
function getAllMoviesWithRatings(req, res, next) {
  // db.any('SELECT * FROM movies INNER JOIN ratings ON(ratings.rating = movies.id) WHERE ratings > 0;')

}

module.exports = {
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  getAllMoviesWithRatings
};
