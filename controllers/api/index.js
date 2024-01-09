const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');

router.use('/blog', dashboardRoutes);
router.use('/user', userRoutes);

module.exports = router;