import { hash, compare } from "bcryptjs"

const encryptPass = async (password: string) => {
  const passHash = await hash(password, 8)
  return passHash
}

const verifyPass = async (password: string, passHash: string) => {
  const isOk = await compare(password, passHash)
  return isOk
}

export { encryptPass, verifyPass }