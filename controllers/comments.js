//comments.js

const Comment = require('../models/comment');

function comments(app) {
app.post('/reviews/comments', (req, res) => {
    console.log(req.body);
  Comment.create(req.body).then(comment => {
    res.redirect(`/reviews/${comment.reviewId}`);
  }).catch((err) => {
    console.log(err.message);
  });
});
}

module.exports = comments
