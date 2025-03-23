export type AppNames =
	| 'Browser'
	| 'VS Code'
	| 'Notepad'
	| 'Calendar'
	| 'Camera'
	| 'Settings'
	| 'About';

export interface App {
	title: AppNames;
	component: any;
}
