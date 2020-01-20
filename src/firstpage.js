import React, { Component } from "react";

export class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick() {
        this.props.history.push("/form");
    }

    render() {
        return ( <
            div >
            <
            button onClick = {
                () => this.handleClick() } > Register < /button> <
            /div>
        );
    }
}

export default Welcome;