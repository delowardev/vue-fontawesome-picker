const fs = require("fs");
const fse = require('fs-extra');
const path = require("path");
const yaml = require("js-yaml")

const fontAwesomeDir = __dirname + '/node_modules/@fortawesome/fontawesome-free'

const icons = path.join(fontAwesomeDir, 'metadata/icons.yml')
const categories = path.join(fontAwesomeDir, 'metadata/categories.yml')


const iconsContent = fs.readFileSync(icons)
const categoriesContent = fs.readFileSync(categories)

const iconsData = JSON.stringify(yaml.load(iconsContent))
const categoriesData = JSON.stringify(yaml.load(categoriesContent))

const output = path.join(__dirname, 'metadata')

if (!fs.existsSync(output)) {
    fs.mkdirSync(output)
}

const files = [{
    name: 'categories.json',
    file: categoriesData,
},
{
    name: 'icons.json',
    file: iconsData
}];

files.forEach( file => {
    fs.writeFile(path.join(output, file.name), file.file, { flag: "w" }, (err) => {
        if (!err) {
            console.log('success! >> ', file.name)
        } else {
            console.log(err)
        }
    })
})


const srcDir = path.join(fontAwesomeDir, 'svgs');
const destDir = path.join(__dirname, 'svgs');

// To copy a folder or file
fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log("successfully copied svgs");
    }
});
