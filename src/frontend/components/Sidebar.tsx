import * as React from "react";

export default class Sidebar extends React.Component<{children: React.ReactNode}> {
	render() {
		return (
			<div className="sidebar">
				{this.props.children}
			</div>
		);
	}
}