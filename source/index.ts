import express, {Express, Request, Response} from "express";

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`)
})

app.get('/api',(req:Request, res: Response) => {
    res.json({
        message: "Hello From TS!",
    })
})