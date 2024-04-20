export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.fea78ba1.js","app":"_app/immutable/entry/app.c0351c30.js","imports":["_app/immutable/entry/start.fea78ba1.js","_app/immutable/chunks/index.4d1394c0.js","_app/immutable/chunks/singletons.e37a20e3.js","_app/immutable/chunks/index.7155e950.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.c0351c30.js","_app/immutable/chunks/index.4d1394c0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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

export const prerendered = new Set([]);
