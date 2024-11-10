const express = require('express');
const {postRequest, getRequest, patchApproved, deleteProtectionRequest} = require('../controllers/protReqController')

const route = express.Router();

route.get('/', getRequest)

route.post('/', postRequest)

route.delete('/:id', deleteProtectionRequest)

route.patch('/:id', patchApproved)



module.exports = route;