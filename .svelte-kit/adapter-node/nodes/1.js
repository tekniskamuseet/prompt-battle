

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2e2e137d.js","_app/immutable/chunks/index.4d1394c0.js","_app/immutable/chunks/stores.00cb3e07.js","_app/immutable/chunks/singletons.e37a20e3.js","_app/immutable/chunks/index.7155e950.js"];
export const stylesheets = [];
export const fonts = [];
