import { Response } from "express";

const handleErrorHttp = (res: Response, error: string) => {
  res.status(500).send(error)
}

export { handleErrorHttp }