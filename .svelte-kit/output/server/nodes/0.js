import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.7663e52f.js","_app/immutable/chunks/index.4d1394c0.js","_app/immutable/chunks/stores.e82ce702.js","_app/immutable/chunks/singletons.e4110553.js","_app/immutable/chunks/index.7155e950.js","_app/immutable/chunks/store.4567397c.js","_app/immutable/chunks/index.b5244028.js"];
export const stylesheets = ["_app/immutable/assets/0.364bda18.css"];
export const fonts = ["_app/immutable/assets/Montserrat-Regular.d6436501.woff2"];
