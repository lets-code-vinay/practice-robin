export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message;
    this.name = this.name;
    this.stack = this.stack;

    Error.captureStackTrace(this, this.constructor);
  }
}
