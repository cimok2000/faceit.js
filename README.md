# FaceIT.js - FaceIT.com API Wrapper

_This is not an Official FaceIT Package!_

## TODO:

- [ ] Create a error parser.
- [ ] Create a custom logger.

## Install

Coming Soon..

```
npm install faceit.js
```

## Usage

To use `faceit.js` you will need to generate an API key on the [FaceIT Developer Website](https://developers.faceit.com/) and replace `your_api_key` with it:

```js
// Javascript
const FACEIT = require("faceit.js");
// Typescript
import FACEIT from "faceit.js";
const FaceIT = new FACEIT(`your-api-key`);
```

You will now be able to test if your API key is correct by using the following function:

```js
console.log(await FaceIT.testKey());
```

If you get a response of `true` your API key is valid. If you get a response of `false` your API key is invalid.