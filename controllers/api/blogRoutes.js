const router = require('express').Router();
const Blog = require('../../models/Blog');
const withAuth = require('../../utils/auth');

router.post('/newblog', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
        });
    
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
    }
);

router.post('/deleteblog', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
    }
);

router.post('/editblog', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.update({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
    }
);


module.exports = router;