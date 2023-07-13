const express = require('express')
const router = express.Router()
const { getDetails, 
    setDetails, 
    updateDetails, 
    deleteDetails, 
} = require('../controllers/detailsController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getDetails).post(protect, setDetails)

// router.get('/', getDetails)
// router.post('/', setDetails)

router.route('/:id').put(protect, updateDetails).delete(protect, deleteDetails)

// router.put('/:id', updateDetails)
// router.delete('/:id', deleteDetails)

module.exports = router