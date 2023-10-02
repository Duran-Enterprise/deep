import { writable } from 'svelte/store';

export const darkMode = writable<boolean>(false);
export const codeEditorFontSize = writable<number>(16);
