var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Dental plan!",
    user: "Lenny",
    added: new Date()
  },
  {
    text: "Lisa needs braces.",
    user: "Marge",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', chatLog: messages});
});

/* GET form page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message Form' });
});

/* POST form page. */
router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageAuthor,
    added: new Date(),
  });
  res.redirect('/');
});


module.exports = router;
