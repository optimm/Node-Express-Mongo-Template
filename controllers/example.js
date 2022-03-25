const { StatusCodes } = require("http-status-codes");
const {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
} = require("../errors");

const exampleController = async (req, res, next) => {
  res
    .status(StatusCodes.OK)
    .json({ success: "true", msg: "Hello this is a example route" });
};
const errorExampleController = async (req, res, next) => {
  throw new BadRequestError("This route is a Bad Request Example");
};

module.exports = { exampleController, errorExampleController };
