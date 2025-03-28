import type { App } from './types';

export let loading = $state({value: true});
export let wallpaper = $state({value: '/wallpapers/0.jpg'});
export let apps: {value: App[]} = $state({value: []});
