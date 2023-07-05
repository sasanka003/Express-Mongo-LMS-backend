const express = require('express')
const router = express.Router()
const { getDetails, 
    setDetails, 
    updateDetails, 
    deleteDetails, 
} = require('../controllers/detailsController')

router.route('/').get(getDetails).post(setDetails)

// router.get('/', getDetails)
// router.post('/', setDetails)

router.route('/:id').put(updateDetails).delete(deleteDetails)

// router.put('/:id', updateDetails)
// router.delete('/:id', deleteDetails)

module.exports = router