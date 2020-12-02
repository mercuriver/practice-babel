// use @babel/preset-react
const element = <div>babel test</div>; 
// use @babel/plugin-transform-template-literals
const text = `element type is ${element.type}`; 
// use @babel/plugin-transform-arrow-functions
const add = (a, b) => a + b;

// command: npx babel src/code.js --presets=@babel/preset-react --plugins=@babel/plugin-transform-template-literals,@babel/plugin-transform-arrow-functions