import { Request, Response, Next } from "restify"
import Item from "../db/models/items"
import { isRegExp } from "util"

class ItemController {
    create(req: Request, res: Response, next: Next) {
        var newItem = new Item(req.body)
        newItem.save((err) => {
            if (err) {
                res.status(400)
                res.send("Unable to save shark to database: " + err)
            } else {
                res.json(newItem)
            }
        })
        return res
    }

    list(req: Request, res: Response, next: Next) {
        Item.find({}).exec((err, sharks) => {
            if (err) {
                return res.send(500, err)
            }
            res.json(sharks)
        })
        return res
    }
}

export default ItemController
