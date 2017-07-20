# Create-ng-component

## use
run `yarn create react-component <component-name>`

or
```
npm i -g create-react-component
create-react-component <component-name>
```

component name should be snake cased.

## Work flow
1. get component name (as snake case)
2. create component-name folder
3. inside the folder
4. create index.js
5. create component-name.js
6. create component-name.tmpl.html

## Templates
**index.js**
```
import componentName from './component-name';
export default componentName;
```

**component-name.js**
```
import React from 'react';
import PropTypes from 'prop-types';

import './component-name.css';

const componentName = () => (
  <div class="component-name"></div>
);

componentName.propTypes = {}
```

**component-name.css**
```
.component-name{

}
```

## Using
- **commander**: for controlling command line arguments.
- **mustache**: for compiling the templates.