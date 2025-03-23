import About from '$lib/components/windows/About.svelte';
import Browser from '$lib/components/windows/Browser.svelte';
import Calendar from '$lib/components/windows/Calendar.svelte';
import Camera from '$lib/components/windows/Camera.svelte';
import Notepad from '$lib/components/windows/Notepad.svelte';
import Settings from '$lib/components/windows/Settings.svelte';
import VsCode from '$lib/components/windows/VSCode.svelte';
import type { App } from './types';

export const items: App[] = [
	{
		title: 'Browser',
		component: Browser
	},
	{
		title: 'VS Code',
		component: VsCode
	},
	{
		title: 'Notepad',
		component: Notepad
	},
	{
		title: 'Calendar',
		component: Calendar
	},
	{
		title: 'Camera',
		component: Camera
	},
	{
		title: 'Settings',
		component: Settings
	},
	{
		title: 'About',
		component: About
	}
];

export const wallpaperCount = 8;
export const wallpaperNames: string[] = [
	'Dark Lake',
	'Hazy Sky',
	'Rocky Mountains',
	'Peaceful Village',
	'Lonely Beach',
	'Illusions',
	'Rocky Beach',
	'Keyboards'
];
