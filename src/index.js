const fs = require('fs');
const path = require('path');

function generateDirectory() {
  fs.mkdirSync(path.join(__dirname, '../generated'), (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });
}

function generateFile(name) {
    fs.writeFile(path.join(__dirname, '../generated', name), '', (err) => {
      if (err) {
        return console.error(err)
      }

      console.log(`File '${name}' created successfully!`)
    })
}

generateDirectory();
generateFile('generated.txt')
generateFile('generated-2.txt')
generateFile('generated.js')
generateFile('generated-2.js')
