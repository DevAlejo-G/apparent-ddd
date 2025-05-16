import { readdirSync } from "fs"
import { Router } from "express";
const router = Router()

const PATH_ROUTE: string = __dirname

const cleanFileName = (fileName: string) => {
  const file =  fileName.split(".").shift()
  return file
}

readdirSync(PATH_ROUTE).filter((fileName) => {
  const rute = cleanFileName(fileName)
  if(rute !== "index"){
    import(`./${rute}`).then((moduleRouter) => {
      router.use(`/api/${rute}`, moduleRouter.route)
    })
  }
})

export { router }