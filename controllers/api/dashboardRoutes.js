const router = require('express').Router();
const User = require('../../models/User');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        });
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
    }
);

module.exports = router;