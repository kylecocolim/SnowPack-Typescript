/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      public: { url: '/', static: true },
      src: { url: '/dist' },
    },
    plugins: [
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-sass',
        '@snowpack/plugin-react-refresh'
    ],
    routes: [
      /* Enable an SPA Fallback in development: */
      {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
      /* Example: Bundle your final build: */
      "bundle": true,
      "minify" : true
    },
    packageOptions: {
      /* ... */
    },
    devOptions: {
        port : 3000
    },
    buildOptions: {
        sourcemap : false
    },
    alias : {
        "style" : "./src/style"
    }
  };
