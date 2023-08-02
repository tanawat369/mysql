const logger = require('../loginfo/logger')
const database = require('../db_connection/dbConnect')
const Response = require('../response/response')
const query = require('../query/query')
require('dotenv').config()

const HttpStatus = {
    OK: {code:200, status:'OK'},
    CREATE: {code:201, status:'CREATED'},
    NO_CONTENT: {code:204, status:'NO_CONTENT'},
    BAD_REQUEST: {code:400, status:'BAD_REQUEST'},
    NOT_FOUND: {code:404, status:'NOT_FOUND'},
    INTERNAL_SERVER_ERROR: {code:500, status:'INTERNAL_SERVER_ERROR'}
}

exports.getsite1s = (req,res,next)=>{
    logger.info(`${req.method} ${req.originalurl}, fetching site1s`)
    database.query(query.SELECT_SITE1S, (err,result)=>{
        if(!result){
            res.status(HttpStatus.OK.code)
            .send(new Response(HttpStatus.OK.code,HttpStatus.OK.status,'No site1s found',{err:err}))
        }else{
            res.json({Result:result})
        }
    })
}

exports.createsite1 = (req,res,next)=>{
    logger.info(`${req.method} ${req.originalurl}, Create site1s`)
    database.query(query.CREATE_SITE1, Object.values(req.body),(err,result)=>{
        if(!result){
            // logger.err(err.message)
            res.json({err:err})
        }else{
            const site1 = {id: result.insertId,...req.body, created_at: new Date()}
            res.json({Result:result})
            logger.info(site1)
        }
    })
}

exports.getsite1ID = (req,res,next)=>{
    logger.info(`${req.method} ${req.originalurl}, Fetching site1`)
    database.query(query.SELECT_SITE1, [req.params.id],(err,result)=>{
        if(!result){
            res.json({
                err:err,
                messege:`ID ${req.params.id} not found`
            })
        }else{
            res.json({Result:result[0],Result:result})
        }
    })
}

exports.updatesite1ID = (req,res,next)=>{
    logger.info(`${req.method} ${req.originalurl}, Update site1`)
    database.query(query.SELECT_SITE1, [req.params.id],(err,result)=>{
        if(!result[0]){
            res.json({
                err:err,
                messege:`ID ${req.params.id} not found`
            })
        }else{
            database.query(query.UPDATE_SITE1,[...Object.values(req.body),req.params.id],(err,result)=>{
                if(result){
                    res.json({Result:result[0],Result:result})
                }else{
                    res.json({err:err})
                }
            })
        }
    })
}

exports.delsite1ID = (req,res,next)=>{
    logger.info(`${req.method} ${req.originalurl}, Delete site1`)
    database.query(query.DELETE_SITE1, [req.params.id],(err,result)=>{
        if(result){
            res.json({result:result,messege:'Delete Complete'})
        }else{
            res.json({err:err})
        }
    })
}
// module.exports=HttpStatus