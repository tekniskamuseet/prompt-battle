

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d6120622.js","_app/immutable/chunks/index.4d1394c0.js","_app/immutable/chunks/store.4567397c.js","_app/immutable/chunks/index.7155e950.js","_app/immutable/chunks/Button.7906048b.js"];
export const stylesheets = ["_app/immutable/assets/2.ff134472.css"];
export const fonts = [];
