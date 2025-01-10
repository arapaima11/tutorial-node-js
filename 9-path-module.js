const path = require('path')

//separator
console.log(path.sep)

//filepath
const filepath = path.join('\content','subfolder','test.txt')
console.log(filepath)

//base
const base = path.basename(filepath)
console.log(base)

//absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)