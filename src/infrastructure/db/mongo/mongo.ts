import { connect } from "mongoose"

const DB_URI: string = process.env.DB_URI!

const dbInit = async ():Promise<void> => {
  await connect(DB_URI)
  console.log("Connection Ready.")
}

export default dbInit