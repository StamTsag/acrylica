export type AppNames =
	| 'Browser'
	| 'VS Code'
	| 'Notepad'
	| 'Calculator'
	| 'Calendar'
	| 'Camera'
	| 'Settings'
	| 'About';

export interface App {
	title: AppNames;
	component: any;
}
