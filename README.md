# is-standalone
A tiny function that detects standalone mode for IOS &amp; Android webApp

# Installation

``` bash
npm install is-standalone --save
# or
yarn add is-standalone -D
```

``` javascript
// for ES module
import isStandalone from 'is-standalone';

// for CMD
const isStandalone = require('is-standalone');

// or
window.isStandalone

```

# How this work?

``` javascript
function isStandalone() {
  return navigator.standalone || (window.matchMedia('(display-mode: standalone)').matches);
}
```

# License
MIT
