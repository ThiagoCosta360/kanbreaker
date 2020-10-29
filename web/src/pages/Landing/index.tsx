import React, { Component, MouseEvent, ChangeEvent } from "react"

import Input from "../../components/Input"

import itemsController from "../../controllers/items-controller"
import api from "../../services/api"

import "./styles.css"

type MyProps = {}
type MyState = {
    items: Array<string>
    text: string
}

class LandingPage extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props)
        this.state = this.getState()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async getState() {
        const response = await api.get("/items")

        return { items: response.data, text: "" }
    }

    render() {
        return (
            <div className="container">
                <h1>Landing</h1>
                <main>
                    <fieldset>
                        <legend> Itens da lista </legend>
                        <Input
                            name="item"
                            label="inserir novo item"
                            onChange={this.handleChange}
                        />

                        <footer>
                            <button type="button" onClick={this.handleSubmit}>
                                salvar
                            </button>
                        </footer>
                    </fieldset>

                    <ul>
                        {this.state.items.map((item: string) => (
                            <li>{item} </li>
                        ))}
                    </ul>
                </main>
            </div>
        )
    }

    handleChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({ text: e.target.value })
    }

    async handleSubmit(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        // if (this.state.text.length === 0) {
        //     return
        // }
        // this.setState((state) => ({
        //     items: state.items.concat(this.state.text),
        //     text: "",
        // }))
        const response = await api.get("/items")
        console.log(response)
    }
}

export default LandingPage
