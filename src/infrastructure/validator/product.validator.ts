import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../util/validator.handle";

const validateCreateObjectData = [
  check("name")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("price")
    .notEmpty()
    .withMessage("is required")
    .isNumeric()
    .withMessage("must be type Number"),
  check("stock")
    .notEmpty()
    .withMessage("is required")
    .isNumeric()
    .withMessage("must be type Number"),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export { validateCreateObjectData };
