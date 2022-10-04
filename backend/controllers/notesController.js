const mongoose = require('mongoose');
const Notes = require('../models/notesModel');

exports.addNote = async (req,res,next)=>{
    try {
        const {title,description} = req.body;

        const note=await Notes.create({
            title,description
        })

        if(!note){
            return res.json({
                success: false,
                message: "notes is not addded"
            })
        }
        res.json(
            {
                success: true,
                note
            }
        )

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}
