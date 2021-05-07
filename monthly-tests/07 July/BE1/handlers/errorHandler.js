export const pageNotFoundError = (req, res, next) => {
  res.status(404).json({
    message: "Page Not Found",
  });
};

export const errorHandler = (err, req, res, next) => {
  err.message = err.message;
  err.statusCode = err.statusCode;
  res.status(err.statusCode).json({
    name: err.name,
    message: err.message,
    occuredAt: err.stack,
  });
};
