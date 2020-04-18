const router = require('express').Router();

router.get('/', (req, res) => res.send("Hello from my book o' recipes."));

router.use('/recipes', require('./recipes'));
router.use('/ingredients', require('./ingredients'));

module.exports = router;
