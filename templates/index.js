const component = `import React from 'react';
import PropTypes from 'prop-types';

import './{{paramCase}}.css';

const {{pascalCase}} = () => (
  <div class="{{paramCase}}"></div>
);

{{pascalCase}}.propTypes = {}
`;

const index = `import {{pascalCase}} from './{{paramCase}}.js'
export default {{pascalCase}};
`;

const style = `.{{paramCase}} {
  
}`;

module.exports = { index, style, component };
