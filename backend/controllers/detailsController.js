const asyncHandler = require('express-async-handler')

const Student = require('../models/studentModel')

// Description  Get details
// Route        GET /api/details
// Access       Private
const getDetails = asyncHandler(async (req, res) => {
    const student = await Student.find()

    res.status(200).json(student)
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

    const student = await Student.create({
        text: req.body.text,
    })

    res.status(200).json(student)
})

// Description  Update details
// Route        PUT /api/details/:id
// Access       Private
const updateDetails = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    if(!student) {
        res.status(400)
        throw new Error('Student not found')
    }

    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
        })
    // res.status(200).json({ message: `Update details ${req.params.id}` })
    res.status(200).json(updatedStudent)
})

// Description  Delete details
// Route        DELETE /api/details/:id
// Access       Private
const deleteDetails = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    if(!student) {
        res.status(400)
        throw new Error('Student not found')
    }

    await student.remove

    res.status(200).json({ id: req.params.id })
    //res.status(200).json({ message: `Delete details ${req.params.id}` })
})

module.exports = {
    getDetails,
    setDetails,
    updateDetails,
    deleteDetails,
}