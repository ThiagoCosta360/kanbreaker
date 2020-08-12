import React, { Component, MouseEvent, ChangeEvent } from "react"

import Input from "../../components/Input"

import "./styles.css"

type MyProps = {}
type MyState = {
    items: Array<string>
    text: string
}

class LandingPage extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props)
        this.state = { items: [], text: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (this.state.text.length === 0) {
            return
        }
        this.setState((state) => ({
            items: state.items.concat(this.state.text),
            text: "",
        }))
    }
}

export default LandingPage
