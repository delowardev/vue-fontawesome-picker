const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml")

const filePath = path.join(__dirname + '/node_modules/@fortawesome/fontawesome-free/metadata/categories.yml');
const file = fs.readFileSync(filePath);
const output = path.join(__dirname)
const data = yaml.load(file);

fs.writeFile(output + '/metadata.json', JSON.stringify(data), (error) => {
    console.log(error)
})
