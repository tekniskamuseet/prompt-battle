import * as server from '../entries/pages/prompt/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/prompt/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/prompt/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.160caf94.js","_app/immutable/chunks/index.4d1394c0.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.e4110553.js","_app/immutable/chunks/index.7155e950.js","_app/immutable/chunks/index.b5244028.js","_app/immutable/chunks/store.4567397c.js","_app/immutable/chunks/Button.7906048b.js"];
export const stylesheets = ["_app/immutable/assets/3.cddadc67.css"];
export const fonts = [];
