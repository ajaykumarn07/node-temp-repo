// NPM - Node Package Manager
// npm - global command, comes eith Node

// local dependency - use it only in this perticular project
// npm i <packageName>

// global dependency - use it in any project
// npm intall -g <packageName>
// sudo install -g <PackgeName> (MacOS)

// package.json - manifest file ( stores important info about project/package )
// manual approach ( create package.json in the root, create properties etc )
// npm init ( step by step, press enter to skip )
// npm init -y ( everything default )

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
console.log(items);

const newItems = _.flattenDeep(items);

console.log(newItems);
