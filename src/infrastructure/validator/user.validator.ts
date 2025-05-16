import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../util/validator.handle";

const validateCreateObjectData = [
  check("name")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("email")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("password")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
    (req: Request, res: Response, next: NextFunction) => {
      validateResult(req, res, next)
    }
];

const validateLoginObjectData = [
  check("email")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
  check("password")
    .notEmpty()
    .withMessage("is required")
    .isString()
    .withMessage("must be type String"),
    (req: Request, res: Response, next: NextFunction) => {
      validateResult(req, res, next)
    }
];

export { validateCreateObjectData, validateLoginObjectData }