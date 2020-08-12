import * as mongoose from "mongoose"
const Schema = mongoose.Schema

const Item = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
})

export default mongoose.model("Item", Item)
