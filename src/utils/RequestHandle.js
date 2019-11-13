const _ = require('lodash');
const ApiError = require("./ApiError");

class RequestHandler {
	constructor() {
        this.error = false;
        this.errors = [];
        this.data = null;
        this.status = 200;
    }
    reset(){
        this.error = false;
        this.errors = [];
        this.data = null;
        this.status = 200;
    }
    send(res){
        res.status(this.status).json({
          error: this.error,
          errors: this.errors,
          data: this.data,
        });
        this.reset();
    }
	sendSuccess(res, data, status) {
        if (status)
        {
            this.status = status;
        }
        if (data)
        {
            this.data = data;
        }
        this.send(res);
    }
    
	sendErrorJoi(res, errors, status) {
        if (status)
        {
            this.status = status;
        }
        else {
            this.status = 400;
        }
        this.errors = errors;
        this.send(res);
    }
    
	sendErrorCustom(res, errorName, status) {
        if (status)
        {
            this.status = status;
        }
        else {
            this.status = 500;
        }
        this.errors[0] = {
            apiCode: ApiError.ApiErrorCode[errorName]?ApiError.ApiErrorCode[errorName]:200,
            message: ApiError.ApiErrorMessage[errorName]?ApiError.ApiErrorMessage[errorName]:"Server Error!",
        };
        this.send(res);
	}
}
module.exports = RequestHandler;