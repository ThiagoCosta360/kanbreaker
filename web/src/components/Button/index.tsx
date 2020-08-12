import React from "react"
import { Component } from "react"

type Props = {
    type?: "button" | "submit"
}

class Button extends Component<Props> {
    render() {
        return <button></button>
    }
}

export default Button
