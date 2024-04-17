const load = async ({ url: { pathname } }) => {
  return { pathname };
};

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-676052fd.js')).default;
const universal_id = "src/routes/+layout.ts";
const imports = ["_app/immutable/nodes/0.7663e52f.js","_app/immutable/chunks/index.4d1394c0.js","_app/immutable/chunks/stores.e82ce702.js","_app/immutable/chunks/singletons.e4110553.js","_app/immutable/chunks/index.7155e950.js","_app/immutable/chunks/store.4567397c.js","_app/immutable/chunks/index.b5244028.js"];
const stylesheets = ["_app/immutable/assets/0.364bda18.css"];
const fonts = ["_app/immutable/assets/Montserrat-Regular.d6436501.woff2"];

export { component, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-be062175.js.map
