# ApprovalSystemAPI
<img src="https://github.com/MihirSrivastava-tech/ApprovalSystemAPI/blob/main/logo.jpg" width="200" />
## About This Project

Industries that operate with PLC (Programmable Logic Controller) and SCADA (Supervisory Control and Data Acquisition) systems often need to bypass specific protection logic temporarily, for maintenance or operational flexibility. Traditionally, these bypasses require manual record-keeping using paper or registers, along with a time-consuming approval process from the operations department. This project provides a streamlined digital solution.

This API system, developed using MongoDB Atlas, ExpressJS, and NodeJS, enables industries to build their own **Protection Bypass Permit Approval System** with ease. By following the included documentation, industry teams can set up a reliable backend quickly and customize the frontend to their preference using popular frameworks like **React, PyQT, ImGUI**, or any other frontend technology. The system is designed to be adaptable, allowing for a seamless transition from paper-based to digital workflows in managing PLC and SCADA bypass approvals.

**This API uses standard ExpressJS notations for developing a project (contains folder like Routes, Models and Controllers)**

## HOW TO INSTALL
Clone this repository and run ```npm install```
Now run ```npm start``` to run server.js and it will run on ```http://localhost:4000```
### How to change the MongoDB Model Schema
In **models** folder ```protReq.js``` contains the MongoDB model Schema. Change it accordingly to your own need and add those fields in the controllers wherever necessary.
### Routes
#### GET ALL PROTECTION REQUEST
```/protectionrequest```

#### POST a PROTECTION REQUEST
```/protectionrequest```
with body as below example
{
    "raisedBy": "Rajan",
    "reason": "MFT Testing and Card Change",
    "protectionToBeBypassed": "Furnace pressure low"
}

#### DELETE a PROTECTION REQUEST
```/protectionrequest/:id```, , here ```:id``` is of Types.ObjectID of MongoDB

#### PATCH and Update ciApprove, ciReject, protectionBypassed, protectionNormalised
```/protectionrequest/:id```, here ```:id``` is of Types.ObjectID of MongoDB
Example if Control and Instrumentation department has approved the request for the logic bypass then ```ciApprove``` will become ```true``` else ```ciReject``` will become true. 
Now after the approval if logic is bypassed then toggle the ```protectionBypassed``` as ```true``` and then after the plant emergency or work protection is normalised then toggle ```protectionNormalised``` as ```true```
```
{
  "ciApprove": true
}
```
the default values are false.
