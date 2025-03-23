import { writable } from 'svelte/store';
import type { App } from './types';

export const loading = writable(true);
export const wallpaper = writable('/wallpapers/0.jpg');
export const apps = writable<App[]>([]);
