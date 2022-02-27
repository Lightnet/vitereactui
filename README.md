# vite react ui

# Created by: Lightnet

# Information:
    To build simple ui and test them for other project builds for ui used.

    It need to build with the babel.js with the import or esmodule format. For the server and client to work together.

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
.jsx = react.js
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













