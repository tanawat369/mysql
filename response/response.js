class Response{
    constructor(statuscode, httpStatus, messege, data){
        var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        var tmx2 = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1).replace(/T/, ' ').replace(/\..+/, '');
        this.Timestamp  = tmx2;
        this.statuscode = statuscode;
        this.httpStatus =  httpStatus;
        this.messege    =  messege;
        this.data       =  data;
    }
}

module.exports = Response