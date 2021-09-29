const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps' })
})
router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` })
})

router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp' })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'Delete new bootcamp' })
})

module.exports = router;