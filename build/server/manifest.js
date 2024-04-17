const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.svg","favicon_192px.png","favicon_512px.png","manifest.webmanifest","og-image.png","twitter-image.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.ca5eee8f.js","app":"_app/immutable/entry/app.c4554a20.js","imports":["_app/immutable/entry/start.ca5eee8f.js","_app/immutable/chunks/index.4d1394c0.js","_app/immutable/chunks/singletons.e4110553.js","_app/immutable/chunks/index.7155e950.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.c4554a20.js","_app/immutable/chunks/index.4d1394c0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-be062175.js')),
			__memo(() => import('./chunks/1-690da6d7.js')),
			__memo(() => import('./chunks/2-584074b7.js')),
			__memo(() => import('./chunks/3-dd04085a.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/prompt",
				pattern: /^\/prompt\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
