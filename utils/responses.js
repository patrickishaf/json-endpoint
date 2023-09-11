class CustomResponse {
  status // 'success' | 'error'
  message // string
  data // any
}

class SuccessResponse extends CustomResponse {
  constructor(data, message) {
    super();
    this.data = data;
    this.status = 'success';
    this.message = message;
  }

  static from(data, message) {
    return new SuccessResponse(data, message)
  }
}

class ErrorResponse extends CustomResponse {
  constructor(message, data) {
    super();
    this.data = data;
    this.status = 'error';
    this.message = message;
  }

  static from(message, data) {
    return new ErrorResponse(data, message)
  }
}

exports.SuccessResponse = SuccessResponse;
exports.ErrorResponse = ErrorResponse;