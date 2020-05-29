import React from "react";

export default class Traffic_light extends React.Component {
	constructor() {
		super();
		this.state = {
			click: null
		};
	}

	render() {
		let redClass = "";
		if (this.state.click == "red") redClass = "selected";
		let yellowClass = "";
		if (this.state.click == "yellow") yellowClass = "selected";
		let greenClass = "";
		if (this.state.click == "green") greenClass = "selected";

		return (
			<div>
				<div id="top_traffic_light" />
				<div id="main_traffic_light">
					<div
						className={"red lights " + redClass}
						onClick={() => this.setState({ click: "red" })}
					/>
					<div
						className={"yellow lights " + yellowClass}
						onClick={() => this.setState({ click: "yellow" })}
					/>
					<div
						className={"green lights " + greenClass}
						onClick={() => this.setState({ click: "green" })}
					/>
				</div>
			</div>
		);
	}
}
