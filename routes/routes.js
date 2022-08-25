const express = require('express')
const router = express.Router();

const { searchJob, postJob, getJobs, getAJob } = require('../controller/jobs')
const {createApplication, getApplications} = require('../controller/application')

router.route('/create').post(postJob)
router.route('/search').get(searchJob)
router.route('/get').get(getJobs)
router.route('/get/single/:id').get(getAJob)
router.route('/apply').post(createApplication)
router.route('/applications').get(getApplications)

module.exports = router