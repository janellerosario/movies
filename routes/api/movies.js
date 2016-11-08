const express = require('express');
const router = express.Router();
const { getAllMovies, getMovie, getAllMoviesWithRatings, updateMovie, deleteMovie } = require('../../models/movie');

// handle all the routes

// get all movies
router.get('/all', getAllMovies, (req, res) => {
  res.json(res.rows);
});

// Get movies withrating BONUS
router.get('/rated', getAllMoviesWithRatings, (req, res) => {
  res.json(res.rows);
});

// Update movie title
router.put('/:id/:title', updateMovie, (req, res) => {
  res.json(res.rows);
});

// Get single movie
router.get('/:id', getMovie, (req, res) => {
  res.json(res.rows);
});

//Delete movie
router.delete('/:id', deleteMovie);


module.exports = router;
