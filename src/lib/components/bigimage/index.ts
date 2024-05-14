import { writable } from 'svelte/store';

export const bigImageStore = writable<string | null>();
