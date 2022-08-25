const Application = require('../models/application')

const createApplication = async (req, res) => {
    const { appliedProfession, appliedLocation, fullname, email, number, profession, experience, how_ready } = req.body
    
    const payload = {
        appliedFor: {
            profession: appliedProfession,
            location: appliedLocation
        },
        full_name: fullname,
        email: email,
        phone_number: number,
        profession: profession,
        experience: experience,
        how_ready: how_ready,
    }

    const application = await Application.create(payload);
    res.status(201).json({sucess: true, message: 'Application has been sucessfully created.', data: application})
}

const getApplications = async (req, res) => {
    const application = await Application.find({}).sort('createdAt')
    if (application.length === 0) {
        return res.status(404).json({sucess: false, message: "No Applications has been submitted at the moment.", data: null})
    }
   return res.status(200).json({sucess: true, message: 'Application has been sucessfuly gotten.', data: application, length: application.length})
}


module.exports = {
    createApplication,
    getApplications
}