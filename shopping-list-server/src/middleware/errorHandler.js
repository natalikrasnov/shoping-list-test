export function ErrorHandler(err, req, res, next) {
  console.error("error=>>>", err);
  res.status(500).send({ message: err.message });
}
