const component = `import React from 'react';
import PropTypes from 'prop-types';

import './{{paramCase}}.css';

const {{pascalCase}} = () => {
  return (
    <div className="{{paramCase}}"></div>
  )
};

{{pascalCase}}.propTypes = {}

export default {{pascalCase}};
`;

const statefulComponent = `import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './{{paramCase}}.css';

class {{pascalCase}} extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (<div className="{{paramCase}}"></div>);
  }
}

{{pascalCase}}.propTypes = {}

export default {{pascalCase}};
`;

const index = `import {{pascalCase}} from './{{paramCase}}.js'
export default {{pascalCase}};
`;

const style = `.{{paramCase}} {
  
}`;

module.exports = { index, style, component, statefulComponent };
