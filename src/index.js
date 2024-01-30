const fs = require("fs");
const path = require("path");
const touch = require('touch')

fs.mkdirSync(path.join(__dirname, "../generated"), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully!");
});
/**
 * 
 * @param {string} name 
 */
function generateFile(name) {
    try {
        touch.sync(path.join(__dirname, "../generated", name))
    } catch (error) {
        console.error(error)
        throw error;
    }
}

generateFile('generated.txt')
generateFile('generated-2.txt')
generateFile('generated.js')
generateFile('generated-2.js')
