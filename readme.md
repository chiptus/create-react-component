# Create-react-component


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
import ComponentName from './component-name';
export default ComponentName;
```

**component-name.js**
stateless:
```
import React from 'react';
import PropTypes from 'prop-types';

import './component-name.css';

const ComponentName = () => (
  <div class="component-name"></div>
);

ComponentName.propTypes = {}
```

or a stateful (by adding the flag -s):
```
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './component-name.css';

class ComponentName extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (<div className="component-name"></div>);
  }
}

ComponentName.propTypes = {}

export default ComponentName;
```

**component-name.css**
```
.component-name{

}
```

## Using
- **commander**: for controlling command line arguments.
- **mustache**: for compiling the templates.