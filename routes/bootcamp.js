const express = require('express');
const {
    deleteBootcamp,
    getBootcamp,
    getBootcamps,
    updateBootcamp,
    createBootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/')
    .get(getBootcamps)
    .post(createBootcamp);
router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);

module.exports = router;







// router.get('/', (req, res) => {
//     res.status(200).json({ success: true, msg: 'Show all bootcamps' })
// })
// router.get('/:id', (req, res) => {
//     res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` })
// })

// router.post('/', (req, res) => {
//     res.status(200).json({ success: true, msg: 'Create new bootcamp' })
// })

// router.put('/:id', (req, res) => {
//     res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` })
// })

// router.delete('/:id', (req, res) => {
//     res.status(200).json({ success: true, msg: 'Delete new bootcamp' })
// })
