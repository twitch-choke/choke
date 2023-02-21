import * as React from "react";
import * as ReactDOM from "react-dom";
import Tabs from "./components/Tabs";
import Sidebar from "./components/Sidebar";
import Tab from "./components/Tab";
import Titlebar from "./components/Titlebar";
import Users from "./components/Users";
import User from "./components/User";

const defaultTabs: JSX.Element[] = [
	// <Tab activated={true} disabled={false} hidden={false} icon="fa-keyboard" name="Commands" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-stack" name="Groups" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-lightning-charge-fill" name="Events" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	<Tab activated={false} disabled={false} hidden={false} icon="bi-gear-fill" name="Settings" />,
	// <Tab activated={false} disabled={false} hidden={false} icon="fa-thumbs-up" name="Acknowledgements" />
];

const injectedTabs: JSX.Element[] = [];
const tabs: { [id: string]: JSX.Element } = {};

function loadTabs() {
	defaultTabs.forEach((tab, index) => tabs[`default-${index}`] = tab);
}

loadTabs();

ReactDOM.render(
    <div className="wrapper">
		<Titlebar></Titlebar>
	  	<Tabs>
			{ Object.entries(tabs).map(([id, element]) => element) }
		</Tabs>
		<Users>
			<User bot={false} name="theLeialoha" image="https://static-cdn.jtvnw.net/jtv_user_pictures/59bea208-bd63-40d2-ae51-44cda776ad24-profile_image-300x300.png" status="disconnected" />
			<User bot={true} name="myPrincessLeia" image="https://static-cdn.jtvnw.net/jtv_user_pictures/59bea208-bd63-40d2-ae51-44cda776ad24-profile_image-300x300.png" status="connecting" />
		</Users>
    </div>,
    document.getElementById("root")
);