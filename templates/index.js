const component = `import React from 'react';
import PropTypes from 'prop-types';

import './{{paramCase}}.css';

const {{pascalCase}} = () => (
  <div className="{{paramCase}}"></div>
);

{{pascalCase}}.propTypes = {}

export default {{pascalCase}};
`;

const index = `import {{pascalCase}} from './{{paramCase}}.js'
export default {{pascalCase}};
`;

const style = `.{{paramCase}} {
  
}`;

module.exports = { index, style, component };
