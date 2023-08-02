const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const logger = require('../loginfo/logger')
const email = "tanawat@test.com"
const dbConnect = require('../db_connection/dbConnect')
const WebResponse = require('../response/response')
// const HttpStatus = require('../controller/controller')
const Controller = require('../controller/controller')

require('dotenv').config()

// router.get('/response',(req,res,next)=>{
//     res.send(new WebResponse(HttpStatus.OK.code,HttpStatus.OK.status,'yeah'))
// })

router.get('/',Controller.getsite1s)

router.post('/site1',Controller.createsite1)

router.get('/:id',Controller.getsite1ID)

router.patch('/:id',Controller.updatesite1ID)

router.delete('/:id',Controller.delsite1ID)

router.post('/test',(req,res,next)=>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token,"rut955")
        var value = req.body.windspeed
        var newValue = value.slice(1, -1) // delete first and last array
        console.log(req.body)
        return res.json({
            messege:'Send Successful',
            Decode:decode
        })
    }catch(err){
        return res.json({err:err})
    }
})

router.post('/windspeed',(req,res,next)=>{
        var value = req.body.windspeed
        var newValue = value.slice(1, -1) // delete first and last array
        console.log(req.body)
        return res.json({
            messege:'Send Successful'
        })
})

const token = jwt.sign({email},"rut955",{expiresIn:'10m'})
logger.info(token)
// console.log(process.env)

module.exports = router