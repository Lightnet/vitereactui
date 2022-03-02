# Vite React UI

# Created by: Lightnet

# Packages:
- react
- vite
- rollup

# Notes:
 - .cjs, .mjs, .jsx and .js in config build to complie for prerender fixed.

# Information:

To build simple ui and test them for other project builds for ui used.

It need to build with the babel.js as ES module format. That compile for browser javascript can be understand. For the server and client to work together.

Vite.js is all in one compiler, server and hot reload front end web page render.

With the some simple modified server script to run backend for request and reponse.

With the use of the react.js component and module design for UI and html element design to reduce some coding.

## Links:
- https://vitejs.dev/
- https://github.com/vitejs/vite
- https://rollupjs.org/guide/en/
- https://reactjs.org/
- https://nodejs.org/
- https://babeljs.io/

# Set up:
    Install the nodejs.

command line
```
    npm install
```

To build the dev server.
```
$ npm run build
$ npm run generate
```

After building the files.
```
$ npm run dev
```
This will run the server and hot reload react.


# javascript types:
.jsx = react / import
.cjs = require
.mjs = import

```
In CommonJS, require() > filename.cjs
ESM, import > filename.mjs
```

```js
(async () => {
    const {foo} = await import('./foo.mjs');
})();
```


# Link refs:
- https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1?gi=e96f10e79c01
- https://stackoverflow.com/questions/40900270/express-js-event-list













