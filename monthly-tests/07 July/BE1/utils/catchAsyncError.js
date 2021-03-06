export const catchAsyncError = (func) => (req, res, next) =>
  func(req, res, next).catch((err) => next(err));

export { catchAsyncError as asyncFuncErrorCatcher };
