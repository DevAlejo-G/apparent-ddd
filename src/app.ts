import "dotenv/config"
import express from "express"
import cors from "cors"
import dbInit from "./infrastructure/db/mongo/mongo"
import { router } from "./presentation/http/routes"

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

dbInit()