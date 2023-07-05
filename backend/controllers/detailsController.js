const asyncHandler = require('express-async-handler')

// Description  Get details
// Route        GET /api/details
// Access       Private
const getDetails = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get details' })
})

// Description  Set details
// Route        POST /api/details
// Access       Private
const setDetails = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        //res.status(400).json({ message: 'Please add a text' })
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set details' })
})

// Description  Update details
// Route        PUT /api/details/:id
// Access       Private
const updateDetails = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update details ${req.params.id}` })
})

// Description  Delete details
// Route        DELETE /api/details/:id
// Access       Private
const deleteDetails = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete details ${req.params.id}` })
})

module.exports = {
    getDetails,
    setDetails,
    updateDetails,
    deleteDetails,
}