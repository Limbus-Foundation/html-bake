
// HTML BAKE EXAMPLE : 

const { HtmlBake } = require("../dist/bake-html");

const bake = new HtmlBake("./example/index.html");
bake.bind("title-bar","./example/titlebar.html");
bake.bake();

console.log("see ./example to see the example modified");