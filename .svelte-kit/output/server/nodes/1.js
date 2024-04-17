

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3bff66d0.js","_app/immutable/chunks/index.4d1394c0.js","_app/immutable/chunks/stores.e82ce702.js","_app/immutable/chunks/singletons.e4110553.js","_app/immutable/chunks/index.7155e950.js"];
export const stylesheets = [];
export const fonts = [];
