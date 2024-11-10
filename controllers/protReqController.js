const mongoose = require('mongoose');
const protReq = require('../models/protReq')

const getRequest = async (req,res)=>{
    const protRequests = await protReq.find({}).sort({createdAt: -1})

    res.status(200).json(protRequests)
}

const postRequest = async (req,res)=>{
    const {raisedBy, reason, protectionToBeBypassed, ciApprove, ciReject, protectionBypassed, protectionNormalised} = req.body

    try{
        const protectionRequest = await protReq.create({raisedBy, reason, protectionToBeBypassed, ciApprove, ciReject, protectionBypassed, protectionNormalised})
        res.status(200).json(protectionRequest)
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

const patchApproved = async (req, res)=>{
   const { id } = req.params;
   if(!mongoose.Types.ObjectId.isValid(id))
   {
    return res.status(400).json({error: 'No such request ID'})
   }

   const prot = await protReq.findOneAndUpdate({_id: id}, {
    ...req.body
  },{new:true})

  if (!prot) {
    return res.status(400).json({error: 'No such request'})
  }

  res.status(200).json(prot)

}


const deleteProtectionRequest = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such protection request ID'})
  }

  const prot = await protReq.findOneAndDelete({_id: id})

  if(!prot) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(prot)
}

module.exports = {getRequest, postRequest, patchApproved, deleteProtectionRequest}