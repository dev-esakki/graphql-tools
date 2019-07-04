# graphql-tools

## Install Below Packages

npm i -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/register

npm i -D nodemon

Create a file .babelrc with the following contents in root path 

{
 "presets": [
   ["@babel/preset-env", {
     "targets": {
       "node": "current"
     }
   }]
 ]
}

## Start Command

NODE_ENV=development nodemon src/app.js --exec babel-node
