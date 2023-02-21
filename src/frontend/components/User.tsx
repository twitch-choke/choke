import * as React from "react";
import User from "../UserInterface";
import StatusConnected from "./status/Connected";
import StatusConnecting from "./status/connecting";
import StatusDisconnected from "./status/Disconnected";
import StatusNoConnection from "./status/NoConnection";

export default class Tab extends React.Component<User, {}> {
	statusIcon: JSX.Element;
	status: string;

	constructor(props: User) {
		super(props);

		switch (this.props.status) {
			case "connected":
				this.statusIcon = <StatusConnected />
				this.status = "Connected";
				break;
			case "connecting":
				this.statusIcon = <StatusConnecting />
				this.status = "Connecting";
				break;
			case "disconnected":
				this.statusIcon = <StatusDisconnected />
				this.status = "Disconnected";
				break;
			case "no connection":
				this.statusIcon = <StatusNoConnection />
				this.status = "No Connection";
				break;
		}
	}

	render() {
		return (
			<span className="user-1JrCWml0ZtW3XzTr">
				<span className="picture-6ZC1cZ6g4WTQVqnd">
					<img src={this.props.image} alt="" draggable={false} width="34" height="34" />
					{ this.statusIcon }
				</span>
				<span className="info-HXJEZFUmD08eICdF">
					<span>{this.props.name}</span>
					<span>{this.status}</span>
				</span>
				{ this.props.bot ? <i className="bi bi-robot" /> : null }
			</span>
		);
	}
}