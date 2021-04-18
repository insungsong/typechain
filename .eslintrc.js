module.exports = {
    "parser": "babel-eslint",
    "root": true,
    "ecmaFeatures":{
      "jsx": true
    },
    "plugins": [
      "react"
    ],
    "env": {
      "browser": true,      // browser global variables.
      "es6": true,         // enable all ECMAScript 6 features except for modul
    },
    "rules": {
      // Require valid JSDoc for all functions and classes
      "require-jsdoc": [1, {
          "require": {
              "FunctionDeclaration": true,
              "MethodDefinition": true,
              "ClassDeclaration": true
          }
      }],
      "valid-jsdoc": [1, {
        "requireReturn": false
      }],
    }
};
