import api from "../services/api"

class Items {
    private route = "/items"

    public get() {
        api.get(this.route).then((res) => {
            return res
        })
    }
    public post() {}
    public del() {}
    public patch() {}
}

export default Items
