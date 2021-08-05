const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml")

const filePath = path.join(__dirname + '/node_modules/@fortawesome/fontawesome-free/metadata/');

const icons = path.join(filePath, 'icons.yml')
const categories = path.join(filePath, 'categories.yml')


const iconsContent = fs.readFileSync(icons)
const categoriesContent = fs.readFileSync(categories)

const iconsData = JSON.stringify(yaml.load(iconsContent))
const categoriesData = JSON.stringify(yaml.load(categoriesContent))

const output = path.join(__dirname, 'metadata')

    const files = [{
        name: 'categories.json',
        file: categoriesData,
    },
    {
        name: 'icons.json',
        file: iconsData
    }];

files.forEach( file => {
    fs.writeFile(path.join(output, file.name), file.file, (err) => {
        if (!err) {
            console.log(file.name)
        }
    })
})
