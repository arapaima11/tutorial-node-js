const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/reuslt-sync.txt', `Here is the Result : ${first}, ${second}`, {flag: 'a'})


