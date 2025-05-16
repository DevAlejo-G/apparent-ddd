import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../util/validator.handle";

const validateCreateObjectData = [
  check("uuid_user")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),

  check("products")
    .notEmpty()
    .withMessage("is required")
    .isArray()
    .withMessage("must be type Array"),
  check("products.*.product_id")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("products.*.quantity")
    .notEmpty()
    .withMessage("is required")
    .isNumeric()
    .withMessage("must be type Number"),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export { validateCreateObjectData };
