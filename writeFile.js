const fs = require('fs');

const template = {
  component: name => {
    const componentString = `import styled from 'styled-components'

        export default function ${name}() {
            return <div>${name}</div>
        }
        `;
    return componentString;
  },
};

function writeFile(name, fileType) {
  const fileName =
    fileType === 'component' ? `./${name}.js` : `./${name}.${fileType}.js`;

  const fileString = template[fileType](name); // template['component']

  fs.writeFileSync(fileName, fileString);
}

module.exports = writeFile;
