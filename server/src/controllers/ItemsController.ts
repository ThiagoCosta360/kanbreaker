import { Request, Response, Next } from "restify"
import Items from "../db/models/items"

class ItemController {
    create(req: Request, res: Response, next: Next) {}
    list(req: Request, res: Response, next: Next) {
        return res.send("Hello World")
    }
}

export default ItemController
