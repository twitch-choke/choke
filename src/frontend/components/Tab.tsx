import * as React from "react";
import SidebarEntry from "../../common/SidebarEntryInterface";

export default class Tab extends React.Component<SidebarEntry, {}> {

	clazz: string;

	constructor(props: SidebarEntry) {
		super(props);
		this.clazz = [
			'tab-x9HrH7evBhpEsjpT',
			this.props.activated ? "selected" : null,
			this.props.disabled ? "disabled" : null
		].filter(e => e != null).join(' ');
	}

	render() {
		return (
			<span className={this.clazz} aria-label={this.props.name}>
				<i className={`bi ${this.props.icon}`}></i>
			</span>
		);
	}
}