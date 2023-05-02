/** 
 * @type {import("snowpack").SnowpackUserConfig } 
 * */

module.exports = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
	plugins: [
		'@snowpack/plugin-react-refresh',
		'@snowpack/plugin-dotenv',
	],
	alias: {
		'@components': './src/components',
		'@pages': './src/pages',
		'@styles': './src/styles',
		'@utils': './src/utils',
	},
	routes: [
		{"match": "routes", "src": ".*", "dest": "/index.html"}
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	optimize: {
		"bundle": true,
		"minify": true,
		"target": 'es2018',
		"treeshake": true,
		"splitting": true,
		"preload": false,
		"manifest": false,
		"nomodule": false,

		/* Example: Bundle your final build: */
		// "bundle": true,
	},
	packageOptions: {
		"cache": ".snowpack/cache",
		"installTypes": true,
		"installOptions": {
			"installTypes": true,
			"sourceMap": true,
		},

	},
	devOptions: {
		port: 3000,
		hostname: 'localhost',
	},
	buildOptions: {
		"out": "build",
		"baseUrl": "/",
		"metaUrlPath": "snowpack",
		"clean": true,
		/* ... */
	},
};
