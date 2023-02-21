export default interface User {
	name: string;
	status: 'connected' | 'connecting' | 'disconnected' | 'no connection';
	image: string;
	bot: boolean;
  }