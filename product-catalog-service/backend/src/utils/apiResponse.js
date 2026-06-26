

class ApiResponse {
    constructor(success, message, data = null, meta = null) {
        this.success = success;
        this.message = message;

        if (data !== null) {
            this.data = data;
        }

        if (meta !== null) {
            this.meta = meta;
        }
    }

    static success(message, data = null, meta = null) {
        return new ApiResponse(true, message, data, meta);
    }

    static error(message) {
        return new ApiResponse(false, message);
    }
}

module.exports = ApiResponse;